import {
  AlphaCard,
  Page,
  Layout,
  VerticalStack,
  Image,
  LegacyStack,
  Link,
  Text,
} from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import { useTranslation, Trans } from 'react-i18next'

import { trophyImage } from '../assets'

import { ProductsCard, ProductCard } from '../components'
import { useAppQuery } from '../hooks'
import { ProductList } from '../components/ProductList'

export default function HomePage() {
  const { t } = useTranslation()
  const { data, isLoading, isRefetching } = useAppQuery({
    url: '/api/products',
  })
  console.log(data)
  return (
    /*  <Page narrowWidth> */
    <Page title="Product Dashboard">
      <TitleBar title={t('HomePage.title')} primaryAction={null} />
      <Layout>
        {/*  <Layout.Section>
          <AlphaCard sectioned>
            <LegacyStack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
              //default is horizontal layout
            >
              <LegacyStack.Item fill>
                <VerticalStack spacing="loose">
                  <Text as="h2" variant="headingMd">
                    {t("HomePage.heading")}
                  </Text>
                  <p>
                    <Trans
                      i18nKey="HomePage.yourAppIsReadyToExplore"
                      components={{
                        PolarisLink: (
                          <Link url="https://polaris.shopify.com/" external />
                        ),
                        AdminApiLink: (
                          <Link
                            url="https://shopify.dev/api/admin-graphql"
                            external
                          />
                        ),
                        AppBridgeLink: (
                          <Link
                            url="https://shopify.dev/apps/tools/app-bridge"
                            external
                          />
                        ),
                      }}
                    />
                  </p>
                  <p>{t("HomePage.startPopulatingYourApp")}</p>
                  <p>
                    <Trans
                      i18nKey="HomePage.learnMore"
                      components={{
                        ShopifyTutorialLink: (
                          <Link
                            url="https://shopify.dev/apps/getting-started/add-functionality"
                            external
                          />
                        ),
                      }}
                    />
                  </p>
                </VerticalStack>
              </LegacyStack.Item>
              <LegacyStack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt={t("HomePage.trophyAltText")}
                    width={120}
                  />
                </div>
              </LegacyStack.Item>
            </LegacyStack>
          </AlphaCard>
        </Layout.Section> */}
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
        <Layout.Section>
          <ProductList
            data={data}
            isLoading={isLoading}
            isRefetching={isRefetching}
          />
        </Layout.Section>
      </Layout>
    </Page>
  )
}
