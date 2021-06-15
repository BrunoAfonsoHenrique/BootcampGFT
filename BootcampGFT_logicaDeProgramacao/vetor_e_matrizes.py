def linha():
    print('-'*60)


linha()
print(f'{"VETORES E MATRIZES":^60}')
linha()

frutas = list()
cesta = list()

for cont in range(0, 4):
    frutas.append(str(input('Fruta: ')))
    frutas.append(float(input('Preço: R$')))

    linha()

    cesta.append(frutas[:])

    frutas.clear()

print(cesta)
linha()
for c in range(0, len(cesta)):
    print(f'>>> Fruta: {cesta[c][0]} Preço: R${cesta[c][1]}')
linha()
print(f'{"Fim da execução!!!":^60}')
linha()