# Manual popup

O plugin é dividido entre a parte de configurações e a parte de funcionamento.


### Como utilizar
<img src="https://user-images.githubusercontent.com/93988164/158657981-4f4cf74b-ac85-4433-b4f7-e4ed6fc5295b.png">

<li>O primeiro campo, **"on-off"**, é o responsável por definir se o plugin irá ou não funcionar. Esse campo pode conter dois valores: on, no qual o código é executado e off, no qual o código não é executado.</li>

<li>O segundo campo, **"general-style"**, adiciona estilos personalizados para todos os popups a fim de menter um estilo padrão dentro do site. esse campo aceita regras css, isso é: apenas os valores a serem adicionados, sem conter os seletores. Veja o exemplo abaixo:
<pre>
'general-style': 'background-color: red;',
</pre>
<sup>Isso irá fazer com que a cor de fundo de todos os popups seja vermelha.</sup>
</li>

<li>
O campo "popup" serve para conter a quantidade de popups que você quer colocar em seu site. Para adicionar um botão basta que duplique a estrutura original.
Exemplo com dois popups:
<img src="https://user-images.githubusercontent.com/93988164/158663695-61a69a42-f35a-4056-8434-e0002baf0691.png">
  
Exemplo com três popups:
<img src="https://user-images.githubusercontent.com/93988164/158663826-5318b67d-f4a8-46ed-9450-49d7de0ade02.png">
</li>

### Configurações de popup
<li>
O primeiro campo, **"position"**, pode receber até 11 valores. São eles:
   <ul>
     <li>top: O conteúdo fica no topo</li>
     <li>top-right: O conteúdo fica no canto superior direito</li>
     <li>top-left: O conteúdo fica no canto superior esquierdo</li>
     <li>bottom: O conteúdo fica no fim</li>
     <li>bottom-right: O conteúdo fica no canto inferior direito</li>
     <li>bottom-left: O conteúdo fica no canto inferior esquierdo</li>
     <li>center: O conteúdo fica no centro</li>
     <li>center-right: O conteúdo fica a direita alinhado ao centro</li>
     <li>center-left: O conteúdo fica a esquerda alinhado ao centro</li>
     <li>center-top: O conteúdo fica localizado em cima, mas tomando o máximo de espao possível</li>
     <li>center-bottom: O conteúdo fica localizado em baixo, mas tomando o máximo de espao possível</li>
   </ul>
</li>
<li>O segundo campo é referente ao conteúdo. Só aceita código HTML</li>
<li>O terceiro campo recebe regras css. Essas são responsáveis por personalizar cada popup individualmente
Exemplo:
<pre>
'specific-style': 'max-width: 280px;',
</pre>
<sup>O popup só terá no máximo 280 pixels de largura</sup>
</li>
<li>O quarto campo é responsável por definir em quais páginas o popup aparecerá. Ele recebe as urls das páginas como argumento. Se você adicionar o comando **"all"** em algum lugar da lista o popup aparecerá em todas as páginas
Exemplo de uso:
<pre>
'page': ['https://meusite.com.br', 'https://meusite.com.br/contato'],
</pre>
<sup>Isso fará com que o popup só apareça na página inicial e na página de contato</sup>
</li>
<li>O quinto item, **"single"**, defini se o popup só aparecerá uma vez ou não. Esse campo recebe o valor "on" para ser ativado. PS.: Esse item está em teste</li>
