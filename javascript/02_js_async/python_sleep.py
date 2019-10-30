from time import sleep
def sleep_3s():
    # 초단위 시간을 입력
    sleep(3)
    print('일어나!!')
    sleep(1)

print('잠자기 시작')
sleep_3s()
print('프로그램 종료')