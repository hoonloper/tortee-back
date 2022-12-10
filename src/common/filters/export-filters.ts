import { Logger } from '@nestjs/common';
import { HttpBadRequestFilter } from './http-bad-request.filter';
import { HttpForbiddenFilter } from './http-forbidden.filter';
import { HttpInternalServerErrorFilter } from './http-internal-server-error.filter';
import { HttpNotFoundFilter } from './http-not-found.filter';
import { HttpUnauthorizedFilter } from './http-unathorized.filter';
import { HttpUnexpectedFilter } from './http-unexpected.filter';
import { MissedErrorFilter } from './missed-error.filter';

export const HttpExceptionFilters = (logger: Logger) => {
  /**
   * Missed, Unexpected Filter 배열 순서를 마지막에 둘 경우
   * 모든 에러를 위 필터들이 우선으로 잡기 때문에 배열 요소 맨 처음으로 넣어줘야 함
   * 순서 Http Filter -> Unexpected Filter -> MissedError Filter
   */
  return [
    new MissedErrorFilter(logger),
    new HttpUnexpectedFilter(logger),
    new HttpBadRequestFilter(logger),
    new HttpUnauthorizedFilter(logger),
    new HttpForbiddenFilter(logger),
    new HttpNotFoundFilter(logger),
    new HttpInternalServerErrorFilter(logger),
  ];
};
