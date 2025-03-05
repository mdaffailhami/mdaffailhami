umur = int(input('Masukkan umur anda: '))

if umur >= 40:
    print('Anda ketuaan')
else:
    if umur >= 18:
        print('Anda dewasa')
    else:
        print('Anda masih bocil')

if umur >= 40:
    print('Anda masih bocil')
elif umur >= 18:
    print('Anda dewasa')
else:
    print('Anda masih bocil')
