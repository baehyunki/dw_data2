Git
---

Git은 소스코드의 버전관리를 도와주는 편리한 도구입니다. Github는 git으로 작성된 이력을 사람들과 공유하거나 협업할 수 있도록 Web 상에서 저장소를 제공하는 서비스입니다. 

:link: Download Link 
https://git-scm.com/download

---

### 깃을 관리하기 위해 초기화(프로젝트 시작할때 맨처음에만 실행)

```bash
git init
```

---

### 통상적인 작업흐름

### 파일을 Tracking(추적)하겠다는 명령

두가지 옵션 중 하나를 이용하여 등록합니다.
```bash
git add -A // 모든 파일을 적용할때 옵션
git add index.html // 특정파일을 지정할때 옵션
```

---

### 커밋 (작업 메세지를 남기는 과정)
```bash
git commit -m "어떤 작업을 했는지 간단하게 서술"
```

---

### 업로드하기 위해서 깃 저장소(Repository)를 만들어야합니다. 
- github.com에서 create new repository
- 깃 저장소 이름을 카피해옵니다.
- (예시) https://github.com/baehyunki/repo.git

---

### github 저장소를 등록
```bash
git remote add origin https://github.com/baehyunki/repo
```

---

### git 저장소에 올리는 명령

초기 설정시에만 아래 명령으로 업로드 합니다.

```bash
git push -u origin master
```

---

평소에는 아래 명령어로 업로드합니다.

```bash
git push
```

---

## 문제가 생겼을때 보세요

---

### 에러가 발생해서 강제로 올려야할 경우
이 경우엔 github에 강제로 덮어버린다는 점을 유의.

```bash
git push -u origin master -f // -f는 force(강제) 옵션
```

---

### 저장소에서 가져오는 방법(집에가서 내 저장소 내용 가져오기)

- 아래의 경우 repo라는 리포지터리 이름대로 저장소가 로컬(자신의 컴퓨터)에 복사됩니다.
```bash
git clone https://github.com/baehyunki/repo.git
```
- 특정 폴더에 저장할 경우
```bash
git clone https://github.com/baehyunki/repo.git folderName
```
---

### git 저장소 이름이 어떻게 등록되었는지 알아보고 싶을때
```bash
git remote get-url origin
```

### 이미 지정된 git 저장소의 이름을 바꾸는 방법
```bash
git remote set-url origin https://github.com/baehyunki/newName
```
---
