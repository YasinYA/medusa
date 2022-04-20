import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm"
import { ulid } from "ulid"
import { Customer } from ".."
import { DbAwareColumn, resolveDbType } from "../utils/db-aware-column"

@Entity()
export class CustomerGroup {
  @PrimaryColumn()
  id: string

  @Index({ unique: true, where: "deleted_at IS NULL" })
  @Column()
  name: string

  @ManyToMany(() => Customer, { cascade: true })
  @JoinTable({
    name: "customer_group_customers",
    joinColumn: {
      name: "customer_group_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "customer_id",
      referencedColumnName: "id",
    },
  })
  customers: Customer[]

  @CreateDateColumn({ type: resolveDbType("timestamptz") })
  created_at: Date

  @UpdateDateColumn({ type: resolveDbType("timestamptz") })
  updated_at: Date

  @DeleteDateColumn({ type: resolveDbType("timestamptz") })
  deleted_at: Date

  @DbAwareColumn({ type: "jsonb", nullable: true })
  metadata: any

  @BeforeInsert()
  private beforeInsert() {
    if (this.id) {
      return
    }
    const id = ulid()
    this.id = `cgrp_${id}`
  }
}
/**
 * @schema customer_group
 * title: "Customer Group"
 * description: "Represents a customer group"
 * x-resourceId: customer_group
 * properties:
 *   id:
 *     type: string
 *   name:
 *     type: string
 *   customers:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/customer"
 *   created_at:
 *     type: string
 *     format: date-time
 *   updated_at:
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     type: string
 *     format: date-time
 *   metadata:
 *     type: object
 */

