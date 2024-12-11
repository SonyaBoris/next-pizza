import { Container, Filters, ProductsGroupList, Title } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-bold" />
      </Container>
      <TopBar />
      <Container className="flex gap-10 pb-14 mt-10">
        <div className="w-[250px]">
          <Filters />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              categoryId={1}
              title="Пиццы"
              items={[
                {},
                {},
              ]} />
            <ProductsGroupList
              categoryId={2}
              title="Комбо"
              items={[ 
                {},
                {},
              ]} />
           
          </div>
        </div>
      </Container>
    </>
  )
}