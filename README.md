## 이 레포지토리는 뭔가요?
```
.
├── proto       // 서비스 인터페이스 명세
│   ├── service
│   └── types
├── go
│   ├── service // 서비스 인터페이스 명세에 대한 go inteface, type, struct 정의됩니다
│   └── types   // 
└── ts          // 서비스 인터페이스 명세에 대한 ts type, enum이 정의됩니다
    ├── service
    └── types
```

## 이걸로 뭘 하나요?
- 서버 코드에 `tech-blog-api/go`를 임포트하세요
- 클라이언트 코드에 `tech-blog-api/ts`를 임포트하세요
