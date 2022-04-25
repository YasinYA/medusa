/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostInvitesInviteAcceptBody, PostInvitesBody, GetInvites200 } from '.././model';
/**
* Accepts an Invite and creates a corresponding user
* @summary Accept an Invite
*/
export declare const postInvitesInviteAccept: (postInvitesInviteAcceptBody: PostInvitesInviteAcceptBody) => Promise<void>;
/**
* Creates an Invite and triggers an 'invite' created event
* @summary Create an Invite
*/
export declare const postInvites: (postInvitesBody: PostInvitesBody) => Promise<void>;
/**
* Lists all Invites
* @summary Lists all Invites
*/
export declare const getInvites: () => Promise<GetInvites200>;
/**
* Creates an Invite and triggers an 'invite' created event
* @summary Create an Invite
*/
export declare const deleteInvitesInvite: (inviteId: string) => Promise<void>;
/**
* Resends an Invite by triggering the 'invite' created event again
* @summary Resend an Invite
*/
export declare const postInvitesInviteResend: (inviteId: string) => Promise<void>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type PostInvitesInviteAcceptResult = NonNullable<AsyncReturnType<typeof postInvitesInviteAccept>>;
export declare type PostInvitesResult = NonNullable<AsyncReturnType<typeof postInvites>>;
export declare type GetInvitesResult = NonNullable<AsyncReturnType<typeof getInvites>>;
export declare type DeleteInvitesInviteResult = NonNullable<AsyncReturnType<typeof deleteInvitesInvite>>;
export declare type PostInvitesInviteResendResult = NonNullable<AsyncReturnType<typeof postInvitesInviteResend>>;
export {};
