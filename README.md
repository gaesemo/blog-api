# Tech Blog API

This repository serves as a **shared API contract library** for a tech blog system.

## What is this repository?

This is a code generation repository that defines service interfaces using Protocol Buffers and generates type-safe code for both backend (Go) and frontend (TypeScript).

```
.
├── proto       // Service interface specifications (protobuf definitions)
│   ├── service 
│   └── types   
├── go          // Generated Go interfaces, types, and structs for server implementation
│   ├── service
│   └── types   
└── ts          // Generated TypeScript types and enums for client implementation
    ├── service
    └── types
```

## Services Defined

- **AuthService**: OAuth authentication flow (GitHub), JWT token management
- **UserService**: User profile management and retrieval

## How to use this?

- **Server projects** import `tech-blog-api/go` for backend implementation
- **Client projects** import `tech-blog-api/ts` for frontend integration

This ensures type safety and API consistency across your tech blog's ecosystem.
