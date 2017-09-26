class NegociacaoService {
  constructor() {
    this._http = new HttpService()
  }

  obterNegociacoesDaSemana() {
    return this._http
      .get('negociacoes/semana')
      .then(negociacoes => {
        return negociacoes.map(
          obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
        )
      })
      .catch(erro => {
        console.log(xhr.responseText)
        throw new Error('Não foi possível carregar as negociações da semana anterior')
      })
  }

  obterNegociacoesDaSemanaAnterior() {
    return this._http
      .get('negociacoes/anterior')
      .then(negociacoes => {
        return negociacoes.map(
          obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
        )
      })
      .catch(erro => {
        console.log(xhr.responseText)
        throw new Error('Não foi possível carregar as negociações da semana anterior')
      })
  }

  obterNegociacoesDaSemanaRetrasada() {
    return this._http
      .get('negociacoes/retrasada')
      .then(negociacoes => {
        return negociacoes.map(
          obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
        )
      })
      .catch(erro => {
        console.log(xhr.responseText)
        throw new Error('Não foi possível carregar as negociações da semana retrasada')
      })
  }

  obterNegociacoes() {
    return Promise.all([
      this.obterNegociacoesDaSemana(),
      this.obterNegociacoesDaSemanaAnterior(),
      this.obterNegociacoesDaSemanaRetrasada()
    ]).then(periodos => {
      let negociacoes = periodos
        .reduce((dados, periodo) => dados.concat(periodo), []);

      return negociacoes;
    }).catch(erro => {
      throw new Error(erro);
    });

  }
}
