// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v5.26.1
// source: employee.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { wrappers } from "protobufjs";
import { Observable } from "rxjs";

export interface EmployeeId {
  employeeId: string;
}

export interface CreateEmployee {
  name: string;
  email: string;
  birthday?: Date | undefined;
  address?: string | undefined;
  allowance?: number | undefined;
  phone?: string | undefined;
  gender?: string | undefined;
}

export interface UpdateEmployee {
  employeeId: string;
  name?: string | undefined;
  email?: string | undefined;
  birthday?: Date | undefined;
  address?: string | undefined;
  allowance?: number | undefined;
  phone?: string | undefined;
  gender?: string | undefined;
}

export interface SearchEmployee {
  name?: string | undefined;
  email?: string | undefined;
}

export interface Employee {
  employeeId: string;
  name: string;
  email: string;
  birthday: Date | undefined;
  address: string;
  allowance: number;
  phone: string;
  gender: string;
  createdAt: Date | undefined;
  deletedAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface AllEmployees {
  employees: Employee[];
  length?: number | undefined;
}

export interface ResponseEmployee {
  code: number;
  message?: string | undefined;
  data: Employee | undefined;
}

export interface ResponseListEmployee {
  code: number;
  message?: string | undefined;
  data: Employee[];
}

export const EMPLOYEES_PACKAGE_NAME = "employees";

wrappers[".google.protobuf.Timestamp"] = {
  fromObject(value: Date) {
    return { seconds: value.getTime() / 1000, nanos: (value.getTime() % 1000) * 1e6 };
  },
  toObject(message: { seconds: number; nanos: number }) {
    return new Date(message.seconds * 1000 + message.nanos / 1e6);
  },
} as any;

export interface EmployeeServiceClient {
  getEmployeeById(request: EmployeeId): Observable<ResponseEmployee>;

  getAllEmployees(request: SearchEmployee): Observable<ResponseListEmployee>;

  createEmployee(request: CreateEmployee): Observable<ResponseEmployee>;

  updateEmployee(request: UpdateEmployee): Observable<ResponseEmployee>;

  deleteEmployee(request: EmployeeId): Observable<ResponseEmployee>;
}

export interface EmployeeServiceController {
  getEmployeeById(request: EmployeeId): Promise<ResponseEmployee> | Observable<ResponseEmployee> | ResponseEmployee;

  getAllEmployees(
    request: SearchEmployee,
  ): Promise<ResponseListEmployee> | Observable<ResponseListEmployee> | ResponseListEmployee;

  createEmployee(request: CreateEmployee): Promise<ResponseEmployee> | Observable<ResponseEmployee> | ResponseEmployee;

  updateEmployee(request: UpdateEmployee): Promise<ResponseEmployee> | Observable<ResponseEmployee> | ResponseEmployee;

  deleteEmployee(request: EmployeeId): Promise<ResponseEmployee> | Observable<ResponseEmployee> | ResponseEmployee;
}

export function EmployeeServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getEmployeeById",
      "getAllEmployees",
      "createEmployee",
      "updateEmployee",
      "deleteEmployee",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("EmployeeService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("EmployeeService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const EMPLOYEE_SERVICE_NAME = "EmployeeService";
