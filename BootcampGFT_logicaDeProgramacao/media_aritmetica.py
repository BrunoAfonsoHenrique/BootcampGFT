def linha():
    print('\033[33m-\033[m'*30)

def media():
    linha()
    print(f'{"MÉDIA ARITMÉTICA":^30}')
    linha()

    nota1 = float(input('Nota 1: '))
    nota2 = float(input('Nota 2: '))
    nota3 = float(input('Nota 3: '))
    nota4 = float(input('Nota 4: '))

    soma = nota1 + nota2 + nota3 + nota4
    media = soma / 4

    linha()
    print(f'A média aritméticas é: {media:.2f}')

media()