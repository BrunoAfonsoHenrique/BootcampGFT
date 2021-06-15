nome = str(input('Digite o nome do cliente: '))

cartao = ' '
while cartao not in 'SN':
    cartao = str(input('O cliente tem cartão de crédito? [SIM/NÃO] ')).strip().upper()[0]

    if cartao == 'SN':
        break

if cartao == 'S':
    numero_cartao = str(input('Digite o numero do cartão: '))
else:
    print('Infelizmente só aceitamos compras com cartão de crédito. ')

print('Fim!!!')

