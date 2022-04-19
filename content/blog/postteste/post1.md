---
title: Post Exemplo
tag: post
description: post
img: teste.jpg
---

## O Cenário

O covidômetro, ferramenta que acompanha os casos de covid na cidade de Florianópolis/SC é uma ferramenta muito utilizada e importante durante o combate a covid-19 e suas variantes.
Durante uma das visitas à ferramenta encontrei na tabela usada na construção dos gráficos muitas informações pessoais, como CPF, nome completo entre outras informações pessoais que estavam disponíveis, por engano, no site da ferramenta.
Imediatamente avisei um amigo jornalista do ndmais.com para que a situação pudesse ser tratada da forma mais responsável possível: o jornal informou as autoridades e após o material ter sido removido do site do covidômetro, informar a população para terem conhecimento sobre o vazamento dos dados.

<ImgCont src="/blog/covidometro/covidometro.jpg" alt="Página lista covidômetro"> </ImgCont>

## O problema

Mas havia um problema, com a divulgação sobre o vazamento as pessoas não saberiam se tinham algum dado vazado. Pensando nisso decidi fazer um serviço de utilidade pública, construí um serviço simples que permitisse verificar se um nome consta na lista vazada, mas sem expor novamente algum dado pessoal.

## A solução

A solução criar um código bastante simples que transforma um conjunto de palavras em um **hash**. Cada nome, ou conjunto de caracteres, possui apenas uma representação de hash. Dessa forma foi possível guardar uma lista de hashes que representassem os nomes das pessoas, sem utilizar o nome das pessoas. Assim também foi possível pesquisar se um nome, ou a representação em hash de um nome, estava contido na lista.
Acabei criando apenas uma página ‘web’ que carrega toda a lista de hashes e publiquei no **surge.sh** gratuitamente.
É importante salientar que nenhuma informação das pessoas que realizaram as pesquisas, de nenhum tipo, é salva. Também, não há nenhum tipo de monetização pelo serviço, servindo apenas para utilidade pública.

## Links

Link do serviço <a href="https://listacovidometro.surge.sh/">lista do covidômetro</a>
O projeto pode ser verificado no <a src="https://github.com/danielgoqueiroz/lista-covid">github</a>

### Contato

Ainda adicionei um email para contato para poder tirar possíveis dúvidas: listacovidometro@gmail.com
