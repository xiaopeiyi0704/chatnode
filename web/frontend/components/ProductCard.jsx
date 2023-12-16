import { Card, LegacyStack, FormLayout, TextField } from '@shopify/polaris'

export const ProductCard = (props) => {
  return (
    <Card
      sectioned
      primaryFooterAction={{
        content: 'Update Product',
        onAction: () => {
          console.log('update proudct')
        },
      }}
      secondaryFooterActions={[
        {
          content: 'View in Admin',
          onAction: () => {
            console.log('view in admin')
          },
        },
      ]}
    >
      {/* spacing="extraLoose for config the space between each item */}
      <LegacyStack spacing="extraLoose">
        <LegacyStack.Item>
          <img src={props.image} alt="" width="250" />
        </LegacyStack.Item>
        {/* fill for let this item use 100% "relative" width  */}
        <LegacyStack.Item fill>
          <FormLayout>
            <TextField label="Product Title" value={props.title}></TextField>
            <TextField
              multiline={4}
              label="Product Description"
              value={props.description}
            ></TextField>
          </FormLayout>
        </LegacyStack.Item>
      </LegacyStack>
    </Card>
  )
}
