import DirectoryItem from "../directory-items/directory-items.components";
import "./directory.style.scss";

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://th.bing.com/th/id/OIP.I3y_G3gKu5o8Q1PkgtRNhwHaHa?pid=ImgDet&rs=1',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://th.bing.com/th/id/OIP.eTAUwILD97MFwuow3r9vkQHaLH?pid=ImgDet&rs=1',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://www.dhresource.com/0x0s/f2-albu-g9-M00-A5-A1-rBVaWF0UnW6Adza3AAPw9CybCyU636.jpg/women-039-s-canvas-shoes-vulcanize-spring.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Womens',
    imageUrl: 'https://th.bing.com/th/id/R.ef7954bc2420ae4200495ed343a1847f?rik=Y83CsYlW7Tw5rg&riu=http%3a%2f%2fgodfatherstyle.com%2fwp-content%2fuploads%2f2015%2f12%2findian-marriage-dresses.jpg&ehk=nm%2bDJavLKDvcp91CJpzdubgAldO7g7ArVl9eqgBe8Lg%3d&risl=&pid=ImgRaw&r=0',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'Mens',
    imageUrl: 'https://i.pinimg.com/originals/37/8c/98/378c98a0415ce66b84c3ec8df0a574f4.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {

  return (
    <div className="directory-container">
      
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
