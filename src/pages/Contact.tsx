import {
  CustomGridContainer,
  GridImage,
  GridImageContainer,
  PageHeader,
} from "../shared";
import { socials } from "../shared/Constants";

const Contact: React.FC<{}> = () => {
  return (
    <CustomGridContainer>
      <PageHeader></PageHeader>

      <PageHeader>Contact</PageHeader>

      <GridImageContainer>
        {socials.map((image) => {
          return (
            <GridImage>
              <img
                src={image.img}
                alt={image.name}
                width="150px"
                height="120px"
              />
            </GridImage>
          );
        })}
      </GridImageContainer>
    </CustomGridContainer>
  );
};
export default Contact;
