/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow */

export type Severity = 'Error' | 'Warning';
export type ErrorHandlerResult = 'Fail' | 'RecoverIfPossible';
export type ErrorCode = 'PP0001';

// This is the error format used to report errors to the caller-supplied
// error-handler
export class CompilerDiagnostics extends Error {
  constructor(message: string, location: string, severity: Severity = 'Error', errorCode: string) {
    super(message);

    this.location = location;
    this.severity = severity;
    this.errorCode = errorCode;
  }

  location: string;
  severity: Severity;
  errorCode: string;
}

export type ErrorHandler = (error: CompilerDiagnostics) => ErrorHandlerResult;

export const errorDetails: {[ErrorCode]: string} = {
  'PP0001': 'Array size must be a concrete number',
};
