langxmlstr = hereDoc(function(){/*!
<language name="Portugues">

  <nextButton label="Próxima" description="Botão Próxima Página"/>
  
  <backButton label="Anterior" description="Botão Página Anterior"/>
  
  <tocButton label="Conteúdos" description="Botão Tabela de Conteúdos"/>
  
  <helpButton label="Ajuda" description="Help Botão de Ajuda. "/>

  <mediaButton label="Mídia" description="Botão Mídia. "/>
  
  <homeButton label="Início" description="Botão Início. "/>
  
  <pageHelp name="Página de Ajuda" description="Página de Ajuda" toClose="Pressione a Barra de Espaço para fechar ajuda"/>
  
  <glossaryButton label="Glossário" description="Botão Glossário. "/>
  
  <continueButton label="Continuar" description="Botão Continuar"/>
  
  <toc label="Tabela de Conteúdos" description="tabela de conteúdos. Use as setas do teclado para selecionar uma página. Pressione Espaço para ir para essa página.">
	  <contentsList label="" description=""/>
	  <closeButton label="" description="botão fechar tabela de conteúdo"/>
	  <gotoPageButton label="Ir para Página" description="Botão ir para página"/>
  </toc>
  
  <glossary label="Glossário" description="Uma lista de palavras e suas definições.">
	  <closeButton label="" description="Botão fechar lista de palavras"/>
  </glossary>
  
  <kbLanguage label="Caracteres Especiais" description="Uma lista de botões que adicionam caracteres especiais a nas áreas de texto">
	  <closeButton label="" description="Botão fechar lista de caracteres especiais"/>
	  <dialog instruction="Use CAPS e SHIFT" on="ON" off="OFF" caps="Caps"/>
  </kbLanguage>
  
  <textToSpeech label="nulo" description="Texto para Discurso"/>
  
  <errorProject label="Os dados do projeto não foi carregado."/>
  
  <errorPage label="Nenhum modelo está disponível para este tipo de página."/>
  
  <errorBrowser label="Seu navegador não suporta totalmente este tipo de página."/>
  
  <errorFlash label="Você precisa instalar o Flash Player para visualizar este conteúdo." description="Obter o Flash Player"/>
  
  <tick label="Tick"/>
  
  <cross label="Cross"/>

  <themes label="--esquemas de cores--" description="Opções de Esquema de cores">
    <item>padrão</item>
    <item>azul</item>
    <item>verde</item>
    <item>vermelho</item>
    <item>laranja</item>
    <item>roxo</item>
    <item>cinza</item>
    <item>alto contraste 1</item>
    <item>alto contraste 2</item>
  </themes>
 
  <sizes label="--Tamanho da tela--" description="Opções de tamanho de tela">
	<item>padrão</item>
	<item>grande</item>
	<item>maior</item>
	<item>tela cheia</item>
	<item>preencher janela</item>
  </sizes>
  
  <fonts label="--Fonte do Texto--" description="Opções Tipográficas">
	  <item>padrão</item>
  </fonts>
  
  <textSizes label="--Tamanho do texto--" description="Opções do tamanho do texto">
	  <item>padrão</item>
	  <item>pequeno</item>
	  <item>médio</item>
	  <item>grande</item>
	  <item>maior</item>
  </textSizes>
  
  <volumeControl label="Vol:" description="Controle de Volume"/>
  <volumeControlSlider label="" description="Controle de Volume Deslizante"/>
  
  <vocab>
	  <page>Página</page>
	  <of>of</of>
  </vocab>
  
  <soundController>
	<stopButton label="Parar Áudio" description="Botão Parar Áudio"/>
	<playButton label="Reproduzir Áudio" description="Botão Reproduzir Áudio"/>
	<pauseButton label="Pausar Áudio" description="Botão Pausa Áudio"/>
	<rwndButton label="Retroceder Áudio" description="Botão Retroceder Áudio"/>
	<ffwdButton label="Avançar Áudio" description="Botão Avançar Áudio"/>
	<loader label="Carregando: "/>
  </soundController>
  
  <movieController>
	<stopButton label="Reiniciar Filme" description="Botão Reiniciar filme"/>
	<playButton label="Play Movie" description="Botão Reproduzir filme"/>
	<pauseButton label="Pause Movie" description="Botão Pausar filme"/>
	<rwndButton label="Rewind Movie" description="Botão Retroceder filme"/>
	<ffwdButton label="Forward Movie" description="Botão Avançar filme"/>
	<loader label="Carregando: "/>
  </movieController>
  
  <mediaElementControls>
	<stopButton label="Parar" description="Botão Parar Mídia"/>
	<playPauseButton label="Repruduzir/Pausar" description="Botão Repruduzir/Pausar Mídia"/>
	<muteButton label="Alterner Silêncio" description="Botão Alterner para Silêncio"/>
	<fullscreenButton label="Tela Cheia" description="Botão Filme em Tela Cheia"/>
	<captionsButton label="Legendas/Subtitulos" description="Botão Mostrar/ocultar Legendas/Subtitulos"/>
  </mediaElementControls>
  
  <interactions>
	  <button name="Botão"/>
	  <radioButton selected="selecionado. Use as setas do teclado para escolher as opções"/>
	  <checkBox selected="selecionado" deselected="deselecionado"/>
	  <comboBox name="ComboBox" options="Opções." selected="selecionado." selectedOptions="selecionado. Use as setas do teclado para selecionar" />
	  <hotSpot name="HotSpot" toSelect="Hot Spot. Pressione Espaço para selecionar." selected="Hot Spot Selecionado"/>
	  <hotObject name="HotObject" toSelect="Pressione Espaço para selecionar." selected="Hot Object Selecionado"/>
	  <textEntry name="Caixa de Entrada de Texto" selected="Caixa de Entrada de Texto Selecionado"/>
	  <targetArea name="Área de destino" description="Largar região para" toSelect="Pressione Espaço para soltar o item selecionado."/>
	  <draggableItem name="Ítem Arrastável" selected="Ítem Selecionado" toSelect="Pressione Espaço para selecionar" deSelected="Nenhum item selecionado." />
  </interactions>
  
  <fetchResults label="Buscando resultados..."/>
  <errorResults label="Houve um erro ao carregar os resultados"/>
  <loadError label="Erro ao carregar"/>
  <noResults label="Não há resultados retornados"/>
  
  <timer>
	  <remaining name="tempo restante"/>
	  <timeUp name="tempo até"/>
	  <seconds name="segundos"/>
  </timer>

  <colourChanger label="Mudar Cor" description="Mudança de cores.">
	  <closeButton label="" description="Fechar Mudança de Cores"/>
  </colourChanger>

</language>

*/});