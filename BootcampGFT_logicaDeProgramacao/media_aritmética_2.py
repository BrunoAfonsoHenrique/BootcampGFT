def linha():
    print('-'*40)

linha()
print(f'{"VERIFICANDO APROVAÇÃO DE UM ALUNO":^40}')
linha()

nota1 = float(input('Nota 1: '))
nota2 = float(input('Nota 2: '))
nota3 = float(input('Nota 3: '))
nota4 = float(input('Nota 4: '))

media = (nota1 + nota2 + nota3 + nota4) / 4

linha()

if media >= 7:
    print(f'Média igual a {media:.2f}. Aluno Aprovado.')
else:
    print(f'Média igual a {media:.2f}. Aluno Reprovado.')
linha()