import productImg from "../../img/img1.jpg";
import "./dataTable.css";
import { nanoid } from "nanoid";
import {
  Grid,
  Segment,
  List,
  Image,
  Pagination,
  Dropdown,
  Item,
  Button,
  Icon,
  Input,
} from "semantic-ui-react";
import "./dataTable.css";
import { useState, useEffect, Fragment } from "react";

function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 5;

  function onChange(e) {
    console.log(e.target.files);
    setImgFile(e.target.files[0]);
  }
  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);
  useEffect(() => {
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]);

  console.log("result", list);
  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }
  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          return (
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
                <Grid.Column width="5">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={
                        item.img[item.img.length - 1]?.imagePath || productImg
                      }
                    />
                  </Segment.Inline>
                </Grid.Column>

                <Grid.Column width={5}>
                  <Segment.Inline>{item.name}</Segment.Inline>
                  <Segment.Inline>
                    {item.price}
                    <span className="currency">{item.currency}</span>
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="4" className="image-upload-form">
                  <Segment.Inline>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        uploadImg(imgFile, item.id);
                      }}
                    >
                      <label 
                       htmlFor={`file-input-${item.id}`}
                       className="img-icon"
                        <Icon
                          className="btn-icon"
                          color="green"
                          name="images"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file-input-${item.id}`}
                        onChange={(e) => {
                          onChange(e, item.id);
                        }} />
                      <Button className="btn-upload" type="submit">
                        <Icon
                          className="btn-icon"                          
                          name="upload"
                          color={
                            selectidId.current === item.id ? "green" : "grey"
                          }
                        />
                      </Button>
                    </form>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
      <div className="pagination-container">
        {/* semantic pagination */}
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </>
  );
}

export default DataTable;
