class NegociacaoService {
  constructor() {
    this._http = new HttpService()
  }

  obterNegociacaoDaSemana() {
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(
            obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
          )
        })
        .catch(erro => {
          console.log(xhr.responseText)
          reject('Não foi possível carregar as negociações da semana anterior')
        })
    })
  }

  obterNegociacaoDaSemanaAnterior() {
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map(
            obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
          )
        })
        .catch(erro => {
          console.log(xhr.responseText)
          reject('Não foi possível carregar as negociações da semana anterior')
        })
    })
  }

  obterNegociacaoDaSemanaRetrasada() {
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map(
            obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
          )
        })
        .catch(erro => {
          console.log(xhr.responseText)
          reject('Não foi possível carregar as negociações da semana retrasada')
        })
    })
  }
}
