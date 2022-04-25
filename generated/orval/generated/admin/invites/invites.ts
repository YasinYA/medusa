/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostInvitesInviteAcceptBody,
  PostInvitesBody,
  GetInvites200
} from '.././model'
import { customInstance } from '../../../src/custom-instance'


  /**
 * Accepts an Invite and creates a corresponding user
 * @summary Accept an Invite
 */
export const postInvitesInviteAccept = (
    postInvitesInviteAcceptBody: PostInvitesInviteAcceptBody,
 ) => {
      return customInstance<void>(
      {url: `/invites/accept`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postInvitesInviteAcceptBody
    },
      );
    }
  /**
 * Creates an Invite and triggers an 'invite' created event
 * @summary Create an Invite
 */
export const postInvites = (
    postInvitesBody: PostInvitesBody,
 ) => {
      return customInstance<void>(
      {url: `/invites`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postInvitesBody
    },
      );
    }
  /**
 * Lists all Invites
 * @summary Lists all Invites
 */
export const getInvites = (
    
 ) => {
      return customInstance<GetInvites200>(
      {url: `/invites`, method: 'get'
    },
      );
    }
  /**
 * Creates an Invite and triggers an 'invite' created event
 * @summary Create an Invite
 */
export const deleteInvitesInvite = (
    inviteId: string,
 ) => {
      return customInstance<void>(
      {url: `/invites/${inviteId}`, method: 'delete'
    },
      );
    }
  /**
 * Resends an Invite by triggering the 'invite' created event again
 * @summary Resend an Invite
 */
export const postInvitesInviteResend = (
    inviteId: string,
 ) => {
      return customInstance<void>(
      {url: `/invites/${inviteId}/resend`, method: 'post'
    },
      );
    }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;

export type PostInvitesInviteAcceptResult = NonNullable<AsyncReturnType<typeof postInvitesInviteAccept>>
export type PostInvitesResult = NonNullable<AsyncReturnType<typeof postInvites>>
export type GetInvitesResult = NonNullable<AsyncReturnType<typeof getInvites>>
export type DeleteInvitesInviteResult = NonNullable<AsyncReturnType<typeof deleteInvitesInvite>>
export type PostInvitesInviteResendResult = NonNullable<AsyncReturnType<typeof postInvitesInviteResend>>