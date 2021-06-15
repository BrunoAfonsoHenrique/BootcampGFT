dados = (("João", "São Paulo", "(11) 99999-5241"),
         ("Maria", "Ribeirão Preto", "(11) 99999-8596"),
          ("Ana", "Manaus", "(11) 99999-8574"))
print('-'*48)
print(f'{"NOME":<10} {"ESTADO":<20} {"TELEFONE":<10}')
print('-'*48)
for c, v in enumerate(dados):
    print(f'{dados[c][0]:<10} {dados[c][1]:<20} {dados[c][2]}')
print('-' * 48)
