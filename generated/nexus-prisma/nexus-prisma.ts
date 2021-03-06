/**
 * This file was automatically generated by nexus-prisma@0.3.7
 * Do not make changes to this file directly
 */

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      Product: ProductObject
      ProductConnection: ProductConnectionObject
      PageInfo: PageInfoObject
      ProductEdge: ProductEdgeObject
      AggregateProduct: AggregateProductObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      ProductSubscriptionPayload: ProductSubscriptionPayloadObject
      ProductPreviousValues: ProductPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      Product: ProductFieldDetails
      ProductConnection: ProductConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      ProductEdge: ProductEdgeFieldDetails
      AggregateProduct: AggregateProductFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      ProductSubscriptionPayload: ProductSubscriptionPayloadFieldDetails
      ProductPreviousValues: ProductPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      ProductWhereUniqueInput: ProductWhereUniqueInputInputObject
      ProductWhereInput: ProductWhereInputInputObject
      ProductCreateInput: ProductCreateInputInputObject
      ProductUpdateInput: ProductUpdateInputInputObject
      ProductUpdateManyMutationInput: ProductUpdateManyMutationInputInputObject
      ProductSubscriptionWhereInput: ProductSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    ProductOrderByInput: ProductOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'product', args?: QueryProductArgs[] | false, alias?: string  } 
  | { name: 'products', args?: QueryProductsArgs[] | false, alias?: string  } 
  | { name: 'productsConnection', args?: QueryProductsConnectionArgs[] | false, alias?: string  } 

type QueryFields =
  | 'product'
  | 'products'
  | 'productsConnection'


type QueryProductArgs =
  | 'where'
type QueryProductsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryProductsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface QueryFieldDetails {
  product: {
    type: 'Product'
    args: Record<QueryProductArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: ProductWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null
  }
  products: {
    type: 'Product'
    args: Record<QueryProductsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product[]> | prisma.Product[]
  }
  productsConnection: {
    type: 'ProductConnection'
    args: Record<QueryProductsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductConnection> | prisma.ProductConnection
  }
}
  

// Types for Product

type ProductObject =
  | ProductFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'price', args?: [] | false, alias?: string  } 
  | { name: 'desc', args?: [] | false, alias?: string  } 
  | { name: 'location', args?: [] | false, alias?: string  } 
  | { name: 'employee', args?: [] | false, alias?: string  } 

type ProductFields =
  | 'id'
  | 'name'
  | 'price'
  | 'desc'
  | 'location'
  | 'employee'



  

export interface ProductFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  price: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  desc: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  location: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  employee: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for ProductConnection

type ProductConnectionObject =
  | ProductConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type ProductConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface ProductConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ProductConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'ProductEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"ProductConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductEdge[]> | prisma.ProductEdge[]
  }
  aggregate: {
    type: 'AggregateProduct'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ProductConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateProduct> | prisma.AggregateProduct
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for ProductEdge

type ProductEdgeObject =
  | ProductEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type ProductEdgeFields =
  | 'node'
  | 'cursor'



  

export interface ProductEdgeFieldDetails {
  node: {
    type: 'Product'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ProductEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product> | prisma.Product
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateProduct

type AggregateProductObject =
  | AggregateProductFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateProductFields =
  | 'count'



  

export interface AggregateProductFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createProduct', args?: MutationCreateProductArgs[] | false, alias?: string  } 
  | { name: 'updateProduct', args?: MutationUpdateProductArgs[] | false, alias?: string  } 
  | { name: 'updateManyProducts', args?: MutationUpdateManyProductsArgs[] | false, alias?: string  } 
  | { name: 'upsertProduct', args?: MutationUpsertProductArgs[] | false, alias?: string  } 
  | { name: 'deleteProduct', args?: MutationDeleteProductArgs[] | false, alias?: string  } 
  | { name: 'deleteManyProducts', args?: MutationDeleteManyProductsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createProduct'
  | 'updateProduct'
  | 'updateManyProducts'
  | 'upsertProduct'
  | 'deleteProduct'
  | 'deleteManyProducts'


type MutationCreateProductArgs =
  | 'data'
type MutationUpdateProductArgs =
  | 'data'
  | 'where'
type MutationUpdateManyProductsArgs =
  | 'data'
  | 'where'
type MutationUpsertProductArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteProductArgs =
  | 'where'
type MutationDeleteManyProductsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createProduct: {
    type: 'Product'
    args: Record<MutationCreateProductArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ProductCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product> | prisma.Product
  }
  updateProduct: {
    type: 'Product'
    args: Record<MutationUpdateProductArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null
  }
  updateManyProducts: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyProductsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertProduct: {
    type: 'Product'
    args: Record<MutationUpsertProductArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product> | prisma.Product
  }
  deleteProduct: {
    type: 'Product'
    args: Record<MutationDeleteProductArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: ProductWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null
  }
  deleteManyProducts: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyProductsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: ProductWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'product', args?: SubscriptionProductArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'product'


type SubscriptionProductArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  product: {
    type: 'ProductSubscriptionPayload'
    args: Record<SubscriptionProductArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: ProductSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductSubscriptionPayload | null> | prisma.ProductSubscriptionPayload | null
  }
}
  

// Types for ProductSubscriptionPayload

type ProductSubscriptionPayloadObject =
  | ProductSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type ProductSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface ProductSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ProductSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Product'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"ProductSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'ProductPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"ProductSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductPreviousValues | null> | prisma.ProductPreviousValues | null
  }
}
  

// Types for ProductPreviousValues

type ProductPreviousValuesObject =
  | ProductPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'price', args?: [] | false, alias?: string  } 
  | { name: 'desc', args?: [] | false, alias?: string  } 
  | { name: 'location', args?: [] | false, alias?: string  } 
  | { name: 'employee', args?: [] | false, alias?: string  } 

type ProductPreviousValuesFields =
  | 'id'
  | 'name'
  | 'price'
  | 'desc'
  | 'location'
  | 'employee'



  

export interface ProductPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  price: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  desc: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  location: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  employee: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  


export interface ProductWhereUniqueInput {
  id?: string | null
}
export type ProductWhereUniqueInputInputObject =
  | Extract<keyof ProductWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface ProductWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  price?: number | null
  price_not?: number | null
  price_in?: number[]
  price_not_in?: number[]
  price_lt?: number | null
  price_lte?: number | null
  price_gt?: number | null
  price_gte?: number | null
  desc?: string | null
  desc_not?: string | null
  desc_in?: string[]
  desc_not_in?: string[]
  desc_lt?: string | null
  desc_lte?: string | null
  desc_gt?: string | null
  desc_gte?: string | null
  desc_contains?: string | null
  desc_not_contains?: string | null
  desc_starts_with?: string | null
  desc_not_starts_with?: string | null
  desc_ends_with?: string | null
  desc_not_ends_with?: string | null
  location?: string | null
  location_not?: string | null
  location_in?: string[]
  location_not_in?: string[]
  location_lt?: string | null
  location_lte?: string | null
  location_gt?: string | null
  location_gte?: string | null
  location_contains?: string | null
  location_not_contains?: string | null
  location_starts_with?: string | null
  location_not_starts_with?: string | null
  location_ends_with?: string | null
  location_not_ends_with?: string | null
  employee?: string | null
  employee_not?: string | null
  employee_in?: string[]
  employee_not_in?: string[]
  employee_lt?: string | null
  employee_lte?: string | null
  employee_gt?: string | null
  employee_gte?: string | null
  employee_contains?: string | null
  employee_not_contains?: string | null
  employee_starts_with?: string | null
  employee_not_starts_with?: string | null
  employee_ends_with?: string | null
  employee_not_ends_with?: string | null
  AND?: ProductWhereInput[]
  OR?: ProductWhereInput[]
  NOT?: ProductWhereInput[]
}
export type ProductWhereInputInputObject =
  | Extract<keyof ProductWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'price', alias?: string  } 
  | { name: 'price_not', alias?: string  } 
  | { name: 'price_in', alias?: string  } 
  | { name: 'price_not_in', alias?: string  } 
  | { name: 'price_lt', alias?: string  } 
  | { name: 'price_lte', alias?: string  } 
  | { name: 'price_gt', alias?: string  } 
  | { name: 'price_gte', alias?: string  } 
  | { name: 'desc', alias?: string  } 
  | { name: 'desc_not', alias?: string  } 
  | { name: 'desc_in', alias?: string  } 
  | { name: 'desc_not_in', alias?: string  } 
  | { name: 'desc_lt', alias?: string  } 
  | { name: 'desc_lte', alias?: string  } 
  | { name: 'desc_gt', alias?: string  } 
  | { name: 'desc_gte', alias?: string  } 
  | { name: 'desc_contains', alias?: string  } 
  | { name: 'desc_not_contains', alias?: string  } 
  | { name: 'desc_starts_with', alias?: string  } 
  | { name: 'desc_not_starts_with', alias?: string  } 
  | { name: 'desc_ends_with', alias?: string  } 
  | { name: 'desc_not_ends_with', alias?: string  } 
  | { name: 'location', alias?: string  } 
  | { name: 'location_not', alias?: string  } 
  | { name: 'location_in', alias?: string  } 
  | { name: 'location_not_in', alias?: string  } 
  | { name: 'location_lt', alias?: string  } 
  | { name: 'location_lte', alias?: string  } 
  | { name: 'location_gt', alias?: string  } 
  | { name: 'location_gte', alias?: string  } 
  | { name: 'location_contains', alias?: string  } 
  | { name: 'location_not_contains', alias?: string  } 
  | { name: 'location_starts_with', alias?: string  } 
  | { name: 'location_not_starts_with', alias?: string  } 
  | { name: 'location_ends_with', alias?: string  } 
  | { name: 'location_not_ends_with', alias?: string  } 
  | { name: 'employee', alias?: string  } 
  | { name: 'employee_not', alias?: string  } 
  | { name: 'employee_in', alias?: string  } 
  | { name: 'employee_not_in', alias?: string  } 
  | { name: 'employee_lt', alias?: string  } 
  | { name: 'employee_lte', alias?: string  } 
  | { name: 'employee_gt', alias?: string  } 
  | { name: 'employee_gte', alias?: string  } 
  | { name: 'employee_contains', alias?: string  } 
  | { name: 'employee_not_contains', alias?: string  } 
  | { name: 'employee_starts_with', alias?: string  } 
  | { name: 'employee_not_starts_with', alias?: string  } 
  | { name: 'employee_ends_with', alias?: string  } 
  | { name: 'employee_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface ProductCreateInput {
  name?: string | null
  price?: number | null
  desc?: string | null
  location?: string | null
  employee?: string | null
}
export type ProductCreateInputInputObject =
  | Extract<keyof ProductCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'price', alias?: string  } 
  | { name: 'desc', alias?: string  } 
  | { name: 'location', alias?: string  } 
  | { name: 'employee', alias?: string  } 
  
export interface ProductUpdateInput {
  name?: string | null
  price?: number | null
  desc?: string | null
  location?: string | null
  employee?: string | null
}
export type ProductUpdateInputInputObject =
  | Extract<keyof ProductUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'price', alias?: string  } 
  | { name: 'desc', alias?: string  } 
  | { name: 'location', alias?: string  } 
  | { name: 'employee', alias?: string  } 
  
export interface ProductUpdateManyMutationInput {
  name?: string | null
  price?: number | null
  desc?: string | null
  location?: string | null
  employee?: string | null
}
export type ProductUpdateManyMutationInputInputObject =
  | Extract<keyof ProductUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'price', alias?: string  } 
  | { name: 'desc', alias?: string  } 
  | { name: 'location', alias?: string  } 
  | { name: 'employee', alias?: string  } 
  
export interface ProductSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: ProductWhereInput | null
  AND?: ProductSubscriptionWhereInput[]
  OR?: ProductSubscriptionWhereInput[]
  NOT?: ProductSubscriptionWhereInput[]
}
export type ProductSubscriptionWhereInputInputObject =
  | Extract<keyof ProductSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type ProductOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'desc_ASC'
  | 'desc_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'employee_ASC'
  | 'employee_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  