import logo from "./logo.svg";
import "./App.css";
import NineBox from "./Problem-4/NineBox";
import InfiniteScrolls from "./Problem-3/InfiniteScrolls";
import SquareBox from "./Problem-5/SquareBox";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import NestedListComponent from "./Problem-2/NestedListComponent";
import ItemTransfer from "./Problem-1/Buckets";
const items = [
  {
    text: "📂 Documents",
    subItems: [
      {
        text: "📂 Work",
        subItems: [
          {
            text: "📂 Project 1",
            subItems: [
              {
                text: "Design",
              },
              {
                text: "Code",
              },
            ],
          },
          {
            text: "📂 Project 2",
            subItems: [
              {
                text: "Design",
              },
              {
                text: "Code",
              },
            ],
          },
        ],
      },
      {
        text: "📂 Personal",
        subItems: [
          {
            text: "Vacation",
          },
          {
            text: "Taxes",
          },
        ],
      },
    ],
  },
  {
    text: "📂 Downloads",
    subItems: [
      {
        text: "Photos",
      },
      {
        text: "Music",
      },
      {
        text: "Videos",
      },
    ],
  },
  {
    text: "📂 Applications",
    subItems: [
      {
        text: "🔍 Chrome",
        subItems: [
          {
            text: "Browse",
          },
          {
            text: "History",
          },
        ],
      },
      {
        text: "🔍 Firefox",
        subItems: [
          {
            text: "Browse",
          },
          {
            text: "History",
          },
        ],
      },
      {
        text: "🔍 Safari",
        subItems: [
          {
            text: "Browse",
          },
          {
            text: "History",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nine-box" element={<NineBox />} />
          <Route path="/infinite-scrolls" element={<InfiniteScrolls />} />
          <Route path="/square-boxes" element={<SquareBox />} />

          <Route path="/bucket-1&2" element={<ItemTransfer />} />
          <Route
            path="/nested-list-component"
            element={<NestedListComponent items={items} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
