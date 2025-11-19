import Template from "./outroCss"
import Json from "./config"

export const OutrosPage = () => {

  return (
    <>
      <Template.container>
        <Template.titulo>Configurações do Sistema</Template.titulo>
        <Template.grid>
          {Json.map((item, index) => (
            item.ativo ? (
              <Template.link to={item.to} key={index}>
                <Template.card_title>{item.label}</Template.card_title>
                <Template.card_desc>{item.desc}</Template.card_desc>
              </Template.link>
            ) : (
              <Template.disabledCard key={index}>
                <Template.small>Em desenvolvimento 'INATIVO'</Template.small>
                <Template.card_title>{item.label}</Template.card_title>
                <Template.card_desc>{item.desc}</Template.card_desc>
              </Template.disabledCard>
            )
          ))}
        </Template.grid>
      </Template.container>
    </>
  )
}