# CLAUDE.md

## 워크플로우

- 기능마다 브랜치를 따서 작업한다
- 브랜치 네이밍: `feature/기능명` (예: `feature/auth`, `feature/posts`)
- 커밋과 PR은 한글로 작성한다(단 영어가 더 적절한 경우 영어를 사용한다)
- 성능상 이유로 전체 테스트 스위트가 아닌 단일 테스트 실행을 선호한다
- 각 PR에는 어떤 기능을 구현했는지 description을 작성한다

## 코드 스타일

- ES 모듈(import/export) 구문을 사용한다, CommonJS(require)는 사용하지 않는다
- 가능하면 import를 구조 분해한다 (예: import { foo } from 'bar')
- 일련의 코드 변경을 완료할 때 반드시 타입 체크를 한다
- 컴포넌트: 함수형 컴포넌트만 사용
- 네이밍
  - 컴포넌트 파일: PascalCase (`PostCard.tsx`)
  - 훅 파일: camelCase, `use` 접두사 (`useAuth.ts`)
  - 유틸/라이브러리 파일: camelCase (`supabase.ts`)
- 스타일: Panda CSS만 사용, 인라인 스타일 금지
- 상태 관리
  - 서버 데이터: TanStack Query
  - UI 상태: Jotai
  - 로컬 폼 상태: React Hook Form
- 유효성 검사: Zod 스키마를 `src/types/` 에 정의해서 재사용
- 커밋 전에 반드시 npm test 를 실행한다
