# 9월 9일

# Git Branch

## Git 기초

- `git init` - master

- `git add`

- `git commit`

- `git log`

- `git log --oneline`

  

## GIt 원격저장소(remote)

- `git remote add` :  `git remote add [저장소이름] [저장소주소]`
- `git remote` : 원격저장소의 리스트(이름)
- `git remote -v` : -v는 verbos 모드. 말이 많은 모드? 



## commit -m 쓰는 방법

- 나, 날짜는 빼라
- 동사로 쓰되 시제는 쓰지 말 것. 동사 원형으로 써라. 그리고 능동태로 써라



git log를 칠 때 나오는 해시는 sha1. 40글자

오픈 소스 중 가장 큰 프로젝트? 리눅스 : 75만개 커밋

프라이머리키로 작용. 

앞으로 commit 단위로 하기 때문에 이것을 아는 것이 중요.



# git의 용도

1. 코드 관리도구
2. 원격 저장소
3. 협업도구
4. 이력서



git 과거로 돌아가기

`git checkout [commit hash값 입력]` : 과거로 돌아가기 : git log --oneline을 쳐서 과거로 돌아갈 시점을 선택할 수 있음

현재로 돌아오려면

`git checkout master` : HEAD 포인터를 마스터로 바꿔놓은 것. 



BRANCH를 배우는 이유?

현업에서 쓰기 때문.

배민에 가면 바로 깃부터 써야 함

우리는 현재 하나의 줄기에서 쓰고 있음. 하나에서 쓰게 되면... master에 push하게 되면, 실제 라이브 서버에 들어가게 된다.... ㅈ망. master 브랜치에 push 할 수 있는 사람은 오직 대장 뿐

원본 코드는 전혀 건드리지 않은 채 branch 기능을 사용



우리는 이제까지 선형 세계에서 관리를 해왔던 것.

이제는 평행 세계를 만들어나갈 것. 이제는 단순히 하나의 세계에서 만드는 것이 아니라.. 다중세계를 만드는 것

처음엔 master라는 브랜치를 만듦. 이제는 가지를 만들 수 있음. master와는 전혀 다르게 만들 수 있다.



기업들이 뭘 기대하는가...? 그냥 그런 거 하나도 필요 없고 command 라인을 잘 썼으면 좋겠다. 그리고 그 다음이 git이다.

git을 조올라 잘하면 이쁨 받음





시작하는 주니어 개발자를 위한 참고자료 kit

`https://programmers.co.kr/learn/courses/9453`



---

`git barnch` : 현재 우리가 가진 모든 branch 정보를 알려줌

`git branch [이름]` : 새로운 branch를 생성



브랜치를 이동할 수 있는 명령어

`git checkout [이름]`

`git switch [이름]`



원래는 branch를 바꾸기 위해서는...

`git checkout [test]` 였는데...

많은 유저들의 불만을 받음

그래서

`git switch [이름]` : 브랜치를 바꾸는 방법. checkout과 같은 기능



지우는 방법은?

`git branch -d [브랜치이름]` : Branch 삭제



`git checkout -b test` : 

`git switch -c [이름]`: create 브랜치를 만들면서 움직이겠다는 것





주로 master 브랜치는 건드리지 않음



이 과정에서 commit을 찍으면 위험해질 수도...

브랜치를 새로 만들고 커밋을 찍으면?

`git switch -c develop` : 



그런데 지금 상태로는 두 개가 분리되어 있지 않다..



로그의 원리?

로그는 부모를 찾아간다. 가지가 아무리 쳐져있더라도 master까지도 갈 수 있다.

찾아갈 수 있는 부분만 브랜치라고 부른다.



평행세계를 하나로 합치는 방법?

`merge`



`git branch -d [이름]` : 브랜치 삭제

`git checkout -b [이름] & git swtich -c [이름]` : branch 생성 및 이동

`git merge [이름]` : 마스터가 branch를 합치는 것. 현재 브랜치에서 특정 브랜치를 병합(항상 병합할 땐 지금 내가 어디에 있는지 **반드시** 확인). [이름] 안에는 병합할 브랜치를 쓸 것. (이 merge를 fast-forward merge라고 함)

- master에서 가지가 나온 이후 commit이 안 되어 있으면 master의 헤드가 develop을 가리키게 됨.  그래서 fast-forward

##### 합병의 주인이 누구인지 반드시 확인하라.

합병 이후 `git log --oneline`을 치면 브랜치 상태 확인 가능



깃의 상태를 볼 수 있음

https://git-school.github.io/visualizing-git/ 





## git merge 시나리오

1. `fast-forward merge`
2. `auto merge` (without conflict) : 파일이 아예 분리되어 있으면 conflict가 안 일어남
3. `merge with conflict`



- 주의할 것은 branch는 일회용품. 한 번 쓰고 버리는 것. 주로 master와 develop 말고 나머지는 일회용품
- 릴리스 브랜치에서 메인 서버에 올리기 전에 Quality Assurance 를 시행하는 것



​	vim 에디터가 뜨면 esc 누르고 `: wq` 하면 됨

`git log --oneline --graph ` 를 하면 현재 브랜치의 변화를 그래프로 볼 수 있다.

작업이 끝나면 branch는 지워주자

`git branch -d develop`



한 군데에서 작업한 것처럼 만들 수도 있음



머지 낼 때 conflic 내는 방법은?



## conflict 해결 방법

### conflict 발생조건은?

1. 동일 파일을 건드리게 될 시 날 가능성이 높다. (동일 파일은 조심히)
   - 그러나 두 파일이 스무스하게 합쳐질 수 있으면 안 남
2. 동일 라인의 내용이 다를 경우
   - 이 경우 백퍼 남. git이 자동으로 합치다가 해결할 수 없어서 프로그래머에게 해결을 요청

같은 파트를 수정했을 때 머지가 발생하면??



- incoming change : merge 될 파일

- current chagne: 병합의 주체

  둘 중 하나를 바로 선택할 수 있다. 이건 vscode가 지원하는 기능

master|merging 임을 알려줌

git status 치면 merging 상태임을 알려줌

커밋할 때는 merge했음을 알려주는 것이 관례. 

주로

`git commit -m 'resolve merge conflict`  : 제대로 하려면 합치려는 브랜치와 합쳐지는 브랜치를 써줘야 하는데 지금은 약식





fetch가 pulling

remote를 하고나니 하나 더 생겼다.

` a5dc5a4 (HEAD -> master, origin/master) resolve merge conflict`

origin/matser : 원격 저장소

push하는 순간 origin/master와 master가 달라졌음을, 커밋이 밀려있음을 알려줌.



## 브랜치에 push 하려면?

`git push origin develop`



개별 리포지토리도 깃헙 페이지를 만들 수 있다.

settings - > 아래로 쭉 내리면 github pages -> source를 None에서 수정









로컬에는 어떻게 저장되어 있는가? /.git/objects 에 binary로 저장되어 있음







## 장고 복습

python venv 가상환경 위에서 실행하기

#### 1. 기본 세팅하기

- `django-admin start project review .` : 장고 프로젝트를 실행하되 현재 폴더에서 진행한다.

- `python manage.py runserver` : 서버를 실행시킨다.

  - `localhost:8000` 에 접속하여 장고가 실행됐는지 확인한다.

- `python manage.py startapp refresh` : 앱을 하나 생성한다.

- 앱이 새로 만들어졌음을 알려줘야 한다.

  - settings.py -> INSTALLED_APPS에 새로 만든 앱을 추가시킨다.

    ```python
    INSTALLED_APPS = [
        'refresh',
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
    ]
    ```

- urls.py에 경로를 설정해준다. 

  ```python
  from django.contrib import admin
  from django.urls import path
  from refresh import views
  # refresh 라는 어플에서 views.py를 가져온다.
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('', views.index, name='home'),
      # 여기서 views는 refresh를 가리킨다.
  ]
  ```

- refresh 앱에서 views.py에 들어가 요청에 대한 응답을 정의해준다.

  ```python
  def index(request):
      context = {
          
      }
      return render(request, 'index.html', context)
  # localhost:8000을 입력하면 index.html이 결과로 나오게 된다.
  ```

#### 2. 데이터베이스 생성하기

- models.py에 생성할 데이터의 기본 구조를 생성한다.

  ```python
  class data(models.Model):
      title=models.CharField(max_length=100)
      author= models.CharField(max_length=50)
      publisher= models.CharField(max_length=50)
      introduction = models.TextField()
  ```

- `python manage.py makemigrations ` : 만든 클래스의 모델을 만든다.

- `python manage.py migrate` : 실제 DB에 적용하여 만든다.











함께 만들어보자

wunderlist



```
-root 
	- app1
		- templates1
    - app2
    	- templates2
새 서버를 실행하면 이것들을 다 모음
- templates
@index.html
@index.html
@ 등등
같은 게 있으면 위부터 우선순위를 매긴다.
```



value='{{ todo.due_date|date:"Y-m-d" }}'

== todo.due_date.date('T-m-d') 템플릿 필터

이렇게 해야 바뀜