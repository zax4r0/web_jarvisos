import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
export default function SplitScreen() {
  return (
    <Stack
      //   w={"full"}
      //   h={"100vh"}
      //   backgroundImage={
      //     "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      //   }
      //   backgroundSize={"cover"}
      //   backgroundPosition={"center center"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _hover={{ color: "blue.400" }}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,

                // bg: "orange.400",
                zIndex: -1,
              }}
            >
              JARVIS_OS
            </Text>
            <br />{" "}
            <Text color={"orange.400"} as={"span"}>
              ANDROID
            </Text>{" "}
            <Text color={"orange.500"} as={"span"}>
              12
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            LOL SOME TAGLINE GOES HERE
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"orange.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Text color={"black"}>Latest Changelog</Text>
            </Button>
            <Button
              rounded={"full"}
              _hover={{
                bg: "orange.400",
              }}
            >
              <DownloadIcon />
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Icon
          id="ace505a7-e733-4353-98c8-975df89a5922"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="728.08199"
          height="680.00102"
          viewBox="0 0 728.08199 680.00102"
        >
          <path
            id="a55003b0-0446-4784-a3ce-c481a9759178"
            data-name="Path 339"
            d="M790.76434,271.5935h-3.736v-102.354a59.24,59.24,0,0,0-59.24-59.24h-216.846a59.24,59.24,0,0,0-59.24,59.24v561.521a59.24,59.24,0,0,0,59.24,59.24h216.85a59.24,59.24,0,0,0,59.24-59.24v-386.31h3.732Z"
            transform="translate(-235.95901 -109.99949)"
            fill="#3f3d56"
          />
          <path
            id="ad332593-d547-4870-8db7-c0503e6eb31e"
            data-name="Path 340"
            d="M774.95435,165.27548v569.452a44.93,44.93,0,0,1-44.913,44.923h-221.306a44.937,44.937,0,0,1-44.941-44.928v-569.447a44.936,44.936,0,0,1,44.941-44.922h26.845a21.364,21.364,0,0,0,19.764,29.411h126.168a21.364,21.364,0,0,0,19.76-29.415h28.756a44.93,44.93,0,0,1,44.922,44.913Z"
            transform="translate(-235.95901 -109.99949)"
            fill="#e6e6e6"
          />
          <path
            d="M751.37437,749.9252h-264a8.50951,8.50951,0,0,1-8.5-8.5v-555a8.50951,8.50951,0,0,1,8.5-8.5h264a8.50951,8.50951,0,0,1,8.5,8.5v555A8.50951,8.50951,0,0,1,751.37437,749.9252Z"
            transform="translate(-235.95901 -109.99949)"
            fill="#fff"
          />
          <circle
            id="edacdc74-dfad-4c1d-939b-d6c7a98a2115"
            data-name="Ellipse 56"
            cx="382.41532"
            cy="182.57071"
            r="72.736"
            fill="#e6e6e6"
          />
          <circle
            id="aec4df6d-8b06-4bbe-8d40-2c8bcc37cf40"
            data-name="Ellipse 60"
            cx="381.41537"
            cy="182.57071"
            r="62.889"
            fill="#fff"
          />
          <path
            id="b468b121-27e1-4684-879a-d4a6b6510a38"
            data-name="Path 341"
            d="M618.77435,256.9002a35.856,35.856,0,1,0,35.856,35.856,35.856,35.856,0,0,0-35.856-35.856Zm0,10.757a10.757,10.757,0,1,1-10.757,10.757,10.75695,10.75695,0,0,1,10.757-10.757Zm0,51.784a26.121,26.121,0,0,1-21.514-11.481c.172-7.171,14.342-11.119,21.514-11.119s21.341,3.948,21.514,11.119a26.164,26.164,0,0,1-21.514,11.484Z"
            transform="translate(-235.95901 -109.99949)"
            fill="#f9a826"
          />
          <rect
            id="af237293-25a3-489f-aa06-65014690590a"
            data-name="Rectangle 26"
            x="316.60535"
            y="279.74971"
            width="125.838"
            height="9.458"
            fill="#e6e6e6"
          />
          <rect
            id="aecd757e-3845-4054-8ef4-8f3b3f1464a2"
            data-name="Rectangle 27"
            x="299.76837"
            y="304.32673"
            width="158.368"
            height="9.458"
            fill="#e6e6e6"
          />
          <rect
            id="a528162f-764e-4523-bc44-e6dc5465582a"
            data-name="Rectangle 25-2"
            x="271.86835"
            y="374.92271"
            width="223.09399"
            height="223.09399"
            fill="#e6e6e6"
          />
          <rect
            id="ac408f88-9589-4a26-924c-e7a781ddb6bc"
            data-name="Rectangle 25-3"
            x="275.41534"
            y="379.64271"
            width="213.655"
            height="213.655"
            fill="#fff"
          />
          <g id="be47c712-4ebf-4226-80ad-879612060a69" data-name="Group 22">
            <rect
              id="fadc6105-0551-448d-b6d9-436c4cc2b7a7"
              data-name="Rectangle 28"
              x="319.41536"
              y="400.2667"
              width="83.168"
              height="6.251"
              fill="#e6e6e6"
            />
            <rect
              id="a4376b16-bb23-442d-8938-a8bcab4f190c"
              data-name="Rectangle 29"
              x="319.41536"
              y="418.61872"
              width="128.429"
              height="6.251"
              fill="#f9a826"
            />
            <rect
              id="ae6c1c25-1aef-4af7-84b7-a99cb79f7c28"
              data-name="Rectangle 30"
              x="320.75032"
              y="436.09571"
              width="104.667"
              height="6.251"
              fill="#e6e6e6"
            />
            <rect
              id="ad31106a-9486-4fc6-9d92-2d07f7dcec19"
              data-name="Rectangle 31"
              x="319.41536"
              y="455.27174"
              width="61.103"
              height="6.251"
              fill="#e6e6e6"
            />
            <rect
              id="e133e237-d12d-4331-8259-b0f1b7869d24"
              data-name="Rectangle 32"
              x="319.41536"
              y="474.0027"
              width="92.22"
              height="6.251"
              fill="#f9a826"
            />
            <rect
              id="a9ae706b-b3a6-4b62-8ac7-3a7f4cd0039d"
              data-name="Rectangle 38"
              x="319.41536"
              y="492.85072"
              width="83.168"
              height="6.251"
              fill="#e6e6e6"
            />
            <rect
              id="bd082349-b2f2-4b60-be0c-57e16efac88b"
              data-name="Rectangle 39"
              x="319.41536"
              y="511.20173"
              width="128.429"
              height="6.251"
              fill="#f9a826"
            />
            <rect
              id="ac0416d6-b57f-4bc7-9ff0-bb8dbe215cb0"
              data-name="Rectangle 40"
              x="320.75032"
              y="528.67872"
              width="104.667"
              height="6.251"
              fill="#e6e6e6"
            />
            <rect
              id="b9702d28-4113-492b-a4b0-dbfc92fa702e"
              data-name="Rectangle 41"
              x="319.41536"
              y="547.85572"
              width="61.103"
              height="6.251"
              fill="#e6e6e6"
            />
            <rect
              id="b41357bb-831a-49ca-b340-115c840dd657"
              data-name="Rectangle 42"
              x="319.41536"
              y="566.58674"
              width="92.22"
              height="6.251"
              fill="#e6e6e6"
            />
          </g>
          <g id="ac800076-fc8a-4256-a3b5-70e496d28429" data-name="Group 23">
            <path
              id="b13647df-bb42-4a02-9bba-2700c526619d"
              data-name="Path 385"
              d="M928.72737,595.02549a9.13,9.13,0,1,1-15.85178-9.0636q.03054-.05337.06179-.10638a9.82561,9.82561,0,0,1,.86-1.22l-7.68-54.74-.23-1.64-1.56-11.17-.23-1.61.85.04,14.88.68,3.99.18.5,10.19,2.83,57.29a9.118,9.118,0,0,1,1.58,11.17Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#ffb8b8"
            />
            <path
              id="bd34735f-0976-456f-8e45-072b5e73a744"
              data-name="Path 386"
              d="M905.93136,528.75147l18.895-1.733a3.73,3.73,0,0,0,3.364-4.037l-3.5-39.292a14.326,14.326,0,0,0-28.5385,2.54782q.03624.4059.09551.80918l5.666,38.54a3.724,3.724,0,0,0,3.678,3.181A2.6391,2.6391,0,0,0,905.93136,528.75147Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#f9a826"
            />
            <path
              id="f1e660d0-c56f-45d1-8714-e8a3d2ffeea9"
              data-name="Path 387"
              d="M920.25336,497.00849a26.316,26.316,0,0,0-9.679-30.288c-7.125-4.875-16.875-6.625-27.375,5.875-21,25-26.5,52.5-26.5,52.5l43,7S914.32236,514.22047,920.25336,497.00849Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#f9a826"
            />
            <path
              id="eb60bd0b-2a6b-4db7-a453-977e2259822f"
              data-name="Path 388"
              d="M850.70637,778.61446h-12.26l-5.832-47.288h18.094Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#ffb8b8"
            />
            <path
              id="b4104c20-2c86-47e7-b6b0-d86d656d7ba2"
              data-name="Path 389"
              d="M814.80537,789.99748h38.531v-14.887h-23.644a14.887,14.887,0,0,0-14.887,14.887Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="b4e48bf6-fea8-48c3-adaa-b392a855b3f6"
              data-name="Path 390"
              d="M951.50037,767.92147l-11.64,3.848-20.38-43.068,17.18-5.679Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#ffb8b8"
            />
            <path
              id="a6908023-9fbc-48a9-be4c-c86c0c45ebaf"
              data-name="Path 391"
              d="M920.9833,789.99738l36.58442-12.09206-4.67194-14.13491-22.44951,7.42012a14.887,14.887,0,0,0-9.463,18.80685Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <circle
              id="a687fec6-02c9-4040-89ed-32d713123e7f"
              data-name="Ellipse 65"
              cx="657.30136"
              cy="319.76099"
              r="24.561"
              fill="#ffb8b8"
            />
            <path
              id="badfc474-5669-4d61-bc01-f70cc92406de"
              data-name="Path 392"
              d="M871.75536,765.45145l11.385-75.145a3.5,3.5,0,0,1,6.862-.3l17.338,71.612a4.533,4.533,0,0,0,5.088,3.385l47.825-7.686a4.5,4.5,0,0,0,3.593-5.75l-62.361-205.6a3.50013,3.50013,0,0,1-.061-1.8l2.076-9a4.484,4.484,0,0,0-2.327-5.014c-8.492-4.333-30-13.341-46.231-3.474a4.551,4.551,0,0,0-2.079,2.927l-48.716,228.97a4.5,4.5,0,0,0,4,5.419l58.757,5.262q.2.018.4.018a4.508,4.508,0,0,0,4.448-3.825Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="eb685785-93ca-4296-839e-b201e57ae5bb"
              data-name="Path 393"
              d="M909.54637,412.40748a18.57992,18.57992,0,0,1-4.855-4.22,6.3,6.3,0,0,1-.97-6.1c1.241-2.738,4.928-3.6,7.786-2.671s5.065,3.172,7.153,5.333c1.839,1.9,3.731,3.892,4.6,6.391s.424,5.668-1.746,7.185c-2.13,1.488-5.192.879-7.24-.719s-3.316-3.97-4.525-6.27Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="a7ccb8bb-f2b9-4447-b454-9c546e399f41"
              data-name="Path 394"
              d="M917.86536,405.40949c.136-6.92,8.024-11.883,14.837-10.656s12.049,7.035,14.67,13.441c5.538,13.535,1.381,28.979-3.955,42.6s-11.94,27.439-11.161,42.043a43.925,43.925,0,0,0,25.515,37c-7.688,3.485-16.878-.115-23.339-5.548-14.348-12.065-19.886-33.546-13.161-51.044,3.317-8.631,9.163-16.015,13.727-24.056s7.913-17.518,5.556-26.459-12.385-16.179-20.958-12.72Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="bd42e2a1-f38b-413b-b655-cc202f14f4c1"
              data-name="Path 395"
              d="M891.78738,440.65949c2.141-3.618,4.3-8.368.388-11.531a8.064,8.064,0,0,0-6.05-1.6c-4.412.532-9.217.751-13.488-.852a12.644,12.644,0,0,1-7.335-6.591c-2.2-5.224.556-11.572,5.165-14.874a17.4,17.4,0,0,1,19.258-.341c5.97-2.637,13.213-1.464,18.637,2.166s9.135,9.443,11.151,15.65a30.206,30.206,0,0,1,.923,16.615,24.692,24.692,0,0,1-15.316,16.879,8.892,8.892,0,0,1-8.782-1.3s-3.385-2.955-4.444-6.514C891.07937,445.62949,890.64437,442.59248,891.78738,440.65949Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="a0cecca8-8fe0-4420-9365-651f9eef8dd5"
              data-name="Path 397"
              d="M818.92536,462.57548a10.52375,10.52375,0,0,1,.239,1.64l42.957,24.782,10.441-6.011,11.131,14.572-17.45,12.438a8,8,0,0,1-9.6-.234l-44.3-34.946a10.5,10.5,0,1,1,6.576-12.241Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#ffb8b8"
            />
            <path
              id="b21f2b01-13d8-4bae-8637-c810de2f9faf"
              data-name="Path 398"
              d="M863.55837,490.17149l13.884,17.994a4.5,4.5,0,0,0,6.8.373l15.717-16.321a12.5,12.5,0,0,0-14.92566-20.05555q-.20382.15171-.40133.31156l-19.712,11.022a4.5,4.5,0,0,0-1.365,6.676Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#f9a826"
            />
          </g>
          <g id="b22d1c68-5a77-444f-a5cc-3f82f20a89dd" data-name="Group 24">
            <path
              id="e5b1612b-0075-49ae-a43a-e875f9772667"
              data-name="Path 552"
              d="M359.66036,533.05647a10.0905,10.0905,0,0,0-1.411.787l-44.852-19.143-1.6-11.815-17.922-.11,1.059,27.1,59.2,15.658a10.60584,10.60584,0,0,0,.448,1.208,10.235,10.235,0,1,0,5.079-13.682Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#a0616a"
            />
            <path
              id="aa9c986c-d78a-4457-b2bb-b0791fabccea"
              data-name="Path 553"
              d="M287.35738,778.61549h12.26l5.832-47.288h-18.094Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#a0616a"
            />
            <path
              id="b210f84f-9c85-4cf8-a59b-65b7d4fb35d0"
              data-name="Path 554"
              d="M308.37435,775.1125h-23.644v14.882h38.531a14.887,14.887,0,0,0-14.887-14.887h-.00006Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="f66096e0-a946-448d-a2e8-3cde5fe284ed"
              data-name="Path 555"
              d="M239.67733,775.1515l12.2,1.2,10.441-46.488-18.007-1.769Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#a0616a"
            />
            <path
              id="fcefb2c9-d6d5-4bec-a5f5-cc8066a5bb74"
              data-name="Path 556"
              d="M260.94371,773.7281,237.41793,771.411,235.959,786.22355l38.33734,3.77594A14.88422,14.88422,0,0,0,260.94272,773.728Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <circle
              id="b1d8892c-f39d-4126-8224-86b256c1ff9d"
              data-name="Ellipse 84"
              cx="47.98535"
              cy="318.16899"
              r="24.561"
              fill="#a0616a"
            />
            <path
              id="ac2d3eab-b9a5-4eb5-9d63-fe405943fbfc"
              data-name="Path 557"
              d="M302.35738,769.0525a4.471,4.471,0,0,0,4.415-3.7c6.341-35.219,27.088-150.4,27.584-153.593a1.41628,1.41628,0,0,0,.016-.222v-8.588a1.489,1.489,0,0,0-.279-.872l-2.74-3.838a1.47889,1.47889,0,0,0-1.144-.625c-15.622-.732-66.784-2.879-69.256.209h0c-2.482,3.1-1.6,12.507-1.4,14.36l-.01.193-22.985,147a4.512,4.512,0,0,0,3.715,5.135l14.356,2.365a4.521,4.521,0,0,0,5.025-3.093c4.44-14.188,19.329-61.918,24.489-80.387a.5.5,0,0,1,.981.139c-.258,17.606-.881,62.523-1.1,78.037l-.023,1.671a4.518,4.518,0,0,0,4.093,4.536l13.843,1.254A4.174,4.174,0,0,0,302.35738,769.0525Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
            <path
              id="bbed60f3-1a89-4078-91d7-bc96163e326a"
              data-name="Path 99"
              d="M299.53237,462.38749c4.286,2.548,6.851,7.23,8.323,12a113.686,113.686,0,0,1,4.884,27.159l1.556,27.6,19.255,73.17c-16.689,14.121-26.315,10.911-48.781-.639s-25.032,3.851-25.032,3.851l-4.492-62.258-6.418-68.032a30.17178,30.17178,0,0,1,4.862-4.674,49.659,49.659,0,0,1,42.442-9Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#e6e6e6"
            />
            <path
              id="ff536e95-7831-431c-8ca8-0e166a93b4bb"
              data-name="Path 558"
              d="M305.78634,547.8335a10.5284,10.5284,0,0,0-1.5.7l-44.35-22.2-.736-12.026-18.294-1.261-.98,27.413,59.266,19.6a10.49972,10.49972,0,1,0,6.593-12.232Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#a0616a"
            />
            <path
              id="ed99b844-bab2-4090-afff-3e8d6994d5eb"
              data-name="Path 101"
              d="M249.14736,475.5445c-10.911,3.851-12.834,45.574-12.834,45.574,12.837-7.06,28.241,4.493,28.241,4.493s3.209-10.912,7.06-25.032a24.52994,24.52994,0,0,0-5.134-23.106S260.05941,471.69151,249.14736,475.5445Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#e6e6e6"
            />
            <path
              id="a410275c-d14b-4b59-9c0e-be849f4d4fe2"
              data-name="Path 102"
              d="M261.92635,434.6645c3.06-2.448,7.235,2,7.235,2l2.448-22.031s15.3,1.833,25.094-.612,11.323,8.875,11.323,8.875a78.58449,78.58449,0,0,0,.306-13.771c-.612-5.508-8.568-11.017-22.645-14.689s-21.421,12.241-21.421,12.241C254.46841,411.57249,258.86239,437.1125,261.92635,434.6645Z"
              transform="translate(-235.95901 -109.99949)"
              fill="#2f2e41"
            />
          </g>
          <rect
            id="a6aa4d97-c7f3-4c66-8fef-1a835a984f6d"
            data-name="Rectangle 256"
            y="770.40917"
            width="738.21997"
            height="2"
            fill="#cacaca"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="190.265"
              y1="345.577"
              x2="527.144"
              y2="147.032"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8D8D5" />
              <stop offset="0.42" stopColor="#CEE0DA" />
              <stop offset="1" stopColor="#FFF0E6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="79.5502"
              y1="106.847"
              x2="-86.7512"
              y2="315.127"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8D8D5" />
              <stop offset="0.47" stopColor="#CCDFDA" />
              <stop offset="1" stopColor="#FFF0E6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="568.572"
              y1="150.967"
              x2="671.263"
              y2="250.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBF2F" />
              <stop offset="1" stopColor="#FD9500" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="638.8"
              y1="337.91"
              x2="471.34"
              y2="225.092"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBF2F" />
              <stop offset="0.48" stopColor="#FEB422" />
              <stop offset="1" stopColor="#FD9500" />
            </linearGradient>
          </defs>
        </Icon>
      </Flex>
    </Stack>
  );
}
