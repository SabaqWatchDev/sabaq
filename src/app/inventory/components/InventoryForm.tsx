import { Card, CardBody, CardHeader, Input, Button } from "@nextui-org/react"

export default function InventoryForm() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="w-2/5">
          <CardHeader>
            <h1>Añade un Artículo</h1>
          </CardHeader>
          <CardBody>
            <form className="flex flex-col gap-4" action="">
              <fieldset>
                <label htmlFor="">Artículo</label>
                <Input></Input>
              </fieldset>
              <fieldset>
                <label htmlFor="">Fecha de Ingreso</label>
                <Input></Input>
              </fieldset><fieldset>
                <label htmlFor="">Estado</label>
                <Input></Input>
              </fieldset>
              <fieldset>
                <label htmlFor="">Imagen</label>
                <input type="file" />
              </fieldset>

              <Button className="w-full" color="primary">Add Item</Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
