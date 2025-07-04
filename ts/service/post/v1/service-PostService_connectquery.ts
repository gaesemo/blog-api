// @generated by protoc-gen-connect-query v2.1.0 with parameter "target=ts,import_extension=none"
// @generated from file service/post/v1/service.proto (package service.post.v1, syntax proto3)
/* eslint-disable */

import { PostService } from "./service_pb";

/**
 * @generated from rpc service.post.v1.PostService.Create
 */
export const create = PostService.method.create;

/**
 * @generated from rpc service.post.v1.PostService.List
 */
export const list = PostService.method.list;

/**
 * rpc Search(SearchRequest) returns (SearchResponse) {} // TODO: define the concept of search.
 *
 * @generated from rpc service.post.v1.PostService.Detail
 */
export const detail = PostService.method.detail;

/**
 * @generated from rpc service.post.v1.PostService.Update
 */
export const update = PostService.method.update;

/**
 * @generated from rpc service.post.v1.PostService.Delete
 */
export const delete$ = PostService.method.delete;
