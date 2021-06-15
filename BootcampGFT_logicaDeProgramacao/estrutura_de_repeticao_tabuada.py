def linha():
    print('-'*51)


linha()
print(f'{"PROGRAMA TABUADA":^51}')
linha()

numero = int(input('Digite um numero e veja a tabuada correspondente: '))
cont = 1
while cont <= 10:
    print(f'{cont} x {numero} = {cont*numero:>2}')
    cont += 1
