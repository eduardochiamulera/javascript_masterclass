4 | 3
(4).toString(2) //toString na base 2
(3).toString(2) //toString na base 2


(4).toString(2).PadStart(32,0) //ajustando a quantidade de caracteres para 32
(3).toString(2).PadStart(32,0) //ajustando a quantidade de caracteres para 32

3 & 1
(3).toString(2).PadStart(32,0) //ajustando a quantidade de caracteres para 32
(1).toString(2).PadStart(32,0) //ajustando a quantidade de caracteres para 32

5 ^ 2
(5).toString(2).PadStart(32,0) //ajustando a quantidade de caracteres para 32
(2).toString(2).PadStart(32,0) //ajustando a quantidade de caracteres para 32

~2 //inverte 0 para 1 e 1 para 0 em binário
(~3 >>> 0)
(2).toString(2).PadStart(32,0)

4 << 2 //deslocando 2 para a esquerda (o mesmo que multiplicar por 2 duas vezes)
(4).toString(2).padStart(32,0)
(16).toString(2).padStart(32,0)

128 >> 1 //deslocando 1 para a esquerda (o mesmo que dividir por 2 uma vez)
(128).toString(2).padStart(32,0)
(64).toString(2).padStart(32,0)

-2 >>> 1
(-2).toString(2).padStart(32,0) //mudou o sinal de 1 para 0, o número deixa de ser negativo e vira positivo, com >> isso não ocorre
(2147483647).toString(2).padStart(32,0)