import { Container, Main } from "@app-components"
import { MortgageForm, MortgageOutput } from "./components"

export default function Home() {
  return (
    <Main className="bg-slate-100 sm:p-10 sm:grid sm:place-items-center">
        <Container className="overflow-hidden w-full sm:rounded-3xl sm:max-w-[688px] xl:flex xl:flex-nowrap xl:max-w-[1008px]">
          <MortgageForm />
          <MortgageOutput />
        </Container>
    </Main>
  )
}