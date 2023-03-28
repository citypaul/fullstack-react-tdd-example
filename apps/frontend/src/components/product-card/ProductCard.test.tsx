import { render, screen } from "@testing-library/react";
import { createMockProduct } from "fullstack-react-tdd-example-mocks";
import { ProductCard } from "./";

describe("ProductCard", () => {
  it("should render if all props are provided", () => {
    const title = "Product Title";
    const description = "Product Description";
    const imageSrc = "https://example.com/image.png";
    const imageAlt = "Product Image";
    const tags = ["tag1", "tag2"];

    render(
      <ProductCard
        onClick={() => {}}
        product={createMockProduct({
          title,
          description,
          tags,
          image: {
            src: imageSrc,
            alt: imageAlt,
          },
          price: {
            currency: "£",
            value: 10,
          },
        })}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByAltText(imageAlt)).toHaveAttribute("src", imageSrc);
    expect(screen.getByText(tags[0])).toBeInTheDocument();
    expect(screen.getByText(tags[1])).toBeInTheDocument();
    expect(screen.getByText("£10")).toBeInTheDocument();
  });

  it('should trigger a callback with the product id when the "Buy Now" button is clicked', () => {
    const onClick = jest.fn();

    render(<ProductCard product={createMockProduct()} onClick={onClick} />);

    screen.getByText("Buy Now").click();

    expect(onClick).toHaveBeenCalledWith("1");
  });
});
