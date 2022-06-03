import React from "react";

export default ({ fillColor, width, ...props }) => (
  <svg width={width} viewBox="0 0 1579 371" fill="none" {...props}>
    <path d="M1578.77 143.503V94.9391H1540.65V112.806H1558.18V129.572C1556.08 130.459 1553.89 131.093 1551.65 131.461C1549.21 131.876 1546.74 132.086 1544.26 132.09C1540.15 132.172 1536.06 131.422 1532.24 129.886C1528.9 128.58 1525.9 126.546 1523.46 123.931C1521.01 121.317 1519.18 118.188 1518.09 114.774C1516.82 111.024 1516.21 107.083 1516.28 103.125C1516.21 99.2053 1516.88 95.3079 1518.25 91.6332C1519.5 88.2417 1521.43 85.1371 1523.9 82.5028C1526.42 79.8908 1529.44 77.8273 1532.79 76.4421C1536.19 74.9997 1539.86 74.2762 1543.56 74.3169C1547.7 74.2345 1551.8 75.0676 1555.58 76.757C1558.86 78.1302 1561.79 80.2291 1564.15 82.8964L1578.14 67.1543C1573.78 63.1309 1568.61 60.097 1562.97 58.26C1556.48 56.0101 1549.64 54.892 1542.77 54.9542C1536.09 54.8841 1529.46 56.031 1523.2 58.3387C1517.35 60.4467 1511.99 63.7428 1507.48 68.0201C1502.87 72.2732 1499.25 77.4852 1496.86 83.2899C1494.24 89.624 1492.93 96.4257 1493.01 103.282C1492.92 110.056 1494.2 116.777 1496.79 123.039C1499.16 128.808 1502.72 134.011 1507.24 138.308C1511.77 142.625 1517.12 145.997 1522.96 148.226C1529.46 150.573 1536.33 151.745 1543.24 151.689C1549.86 151.757 1556.46 151.017 1562.89 149.485C1568.34 148.195 1573.62 146.266 1578.61 143.739L1578.77 143.503ZM1454.18 91.0822C1453.24 92.5237 1451.94 93.6913 1450.41 94.4668C1448.76 95.2971 1446.98 95.83 1445.14 96.041C1443.3 96.3513 1441.43 96.5093 1439.56 96.5133H1429.03V75.104H1440.9C1442.6 74.9959 1444.31 74.9959 1446.01 75.104C1447.69 75.2908 1449.31 75.7985 1450.8 76.5995C1452.25 77.267 1453.47 78.3315 1454.34 79.6692C1455.34 81.2394 1455.84 83.081 1455.75 84.9428C1455.83 86.9742 1455.28 88.98 1454.18 90.6887V91.0822ZM1482.56 148.698L1458.58 109.343C1464.07 107.856 1468.97 104.692 1472.58 100.291C1476.02 95.7867 1477.8 90.222 1477.61 84.5493C1477.79 79.9551 1476.76 75.3938 1474.62 71.3259C1472.73 67.8747 1470.03 64.9317 1466.76 62.7465C1463.3 60.5321 1459.46 58.9838 1455.44 58.1813C1451.21 57.2313 1446.89 56.7561 1442.55 56.7645H1407.02V149.092H1428.64V112.649H1436.5L1456.46 149.092L1482.56 148.698ZM1383.44 114.459V57.1581H1361.27V112.649C1361.28 115.068 1360.97 117.478 1360.33 119.812C1359.75 121.989 1358.74 124.025 1357.34 125.794C1355.93 127.624 1354.1 129.082 1352 130.044C1349.52 131.117 1346.84 131.654 1344.14 131.618C1341.43 131.673 1338.75 131.136 1336.28 130.044C1334.16 129.102 1332.33 127.64 1330.93 125.794C1329.57 124.007 1328.55 121.977 1327.94 119.812C1327.31 117.478 1326.99 115.068 1327 112.649V57.5516H1304.83V114.853C1304.78 120.019 1305.72 125.148 1307.59 129.965C1309.34 134.392 1312.02 138.392 1315.45 141.693C1318.97 145.147 1323.17 147.828 1327.79 149.564C1333 151.461 1338.51 152.394 1344.06 152.319C1349.6 152.38 1355.11 151.447 1360.33 149.564C1365.01 147.829 1369.29 145.15 1372.91 141.693C1376.35 138.405 1379.03 134.402 1380.77 129.965C1382.69 125.163 1383.65 120.028 1383.6 114.853L1383.44 114.459ZM1262.31 126.187C1261.37 127.582 1260.1 128.719 1258.61 129.493C1257.01 130.301 1255.28 130.858 1253.51 131.146C1251.74 131.455 1249.95 131.613 1248.16 131.618H1235.74V110.13H1248C1251.92 109.979 1255.82 110.733 1259.4 112.334C1260.84 113.048 1262.02 114.184 1262.79 115.591C1263.57 116.998 1263.89 118.608 1263.72 120.205C1263.81 122.142 1263.32 124.062 1262.31 125.715V126.187ZM1257.28 91.161C1254.42 93.0585 1251.03 93.9706 1247.61 93.7584H1235.74V74.8679H1246.59C1250.25 74.6462 1253.91 75.3784 1257.2 76.9931C1258.35 77.6858 1259.3 78.6845 1259.92 79.8789C1260.54 81.0733 1260.83 82.4171 1260.74 83.7622C1260.83 85.1982 1260.56 86.6338 1259.95 87.9394C1259.35 89.2449 1258.43 90.3792 1257.28 91.2397V91.161ZM1284.4 114.223C1283.44 111.883 1282.08 109.726 1280.39 107.848C1278.66 106.029 1276.64 104.513 1274.41 103.361C1272.11 102.187 1269.65 101.364 1267.1 100.921C1271.34 99.612 1275.11 97.096 1277.95 93.6797C1280.84 90.1071 1282.32 85.5992 1282.12 81.0073C1282.28 76.9857 1281.3 73.0006 1279.29 69.5156C1277.44 66.5409 1274.91 64.0565 1271.9 62.2743C1268.73 60.5039 1265.31 59.2298 1261.76 58.4962C1258.19 57.7868 1254.55 57.4178 1250.91 57.3942H1214.28V149.092H1250.91C1255.24 149.122 1259.57 148.673 1263.8 147.754C1267.77 146.978 1271.56 145.456 1274.96 143.267C1278.24 141.221 1280.94 138.377 1282.82 135.003C1284.91 131.142 1285.94 126.797 1285.81 122.409C1285.83 119.713 1285.33 117.038 1284.32 114.538L1284.4 114.223ZM1189.52 149.407V57.1581H1167.98L1168.53 117.214L1131.12 57.1581H1105.89V149.092H1127.42L1126.87 88.9571L1163.82 149.092L1189.52 149.407ZM1084.9 149.407V130.123H1042.22V111.075H1080.34V93.2861H1042.22V75.8911H1082.54V57.1581H1020.76V149.092L1084.9 149.407ZM974.852 116.033C973.338 119.341 971.012 122.211 968.092 124.377C965.157 126.477 961.849 128 958.345 128.863C954.585 129.758 950.734 130.207 946.869 130.201H936.415V76.1273H947.419C951.154 76.1324 954.874 76.5815 958.503 77.4654C961.955 78.256 965.215 79.7277 968.092 81.7944C970.965 83.8132 973.289 86.5189 974.852 89.6655C976.652 93.7233 977.512 98.1362 977.368 102.574C977.495 106.985 976.635 111.368 974.852 115.404V116.033ZM995.918 80.7712C993.17 75.1512 989.063 70.308 983.97 66.682C978.94 62.9682 973.222 60.2926 967.149 58.811C960.866 57.3061 954.43 56.5401 947.97 56.5284H914.956V149.092H949.227C955.527 149.09 961.796 148.216 967.856 146.494C973.863 144.792 979.492 141.96 984.442 138.151C989.389 134.283 993.416 129.364 996.233 123.747C999.362 117.25 1000.9 110.099 1000.71 102.889C1000.97 95.3595 999.406 87.8797 996.154 81.086L995.918 80.7712ZM890.274 149.092V57.1581H868.736L869.286 117.214L832.028 57.1581H806.796V149.092H828.333L827.783 88.9571L864.727 149.092H890.274ZM754.602 113.279H731.886L743.519 81.7944L754.602 113.279ZM792.49 149.092L754.602 57.1581H733.143L694.627 149.092H718.759L725.519 131.067H761.048L768.201 149.092H792.49ZM656.347 91.0822C655.379 92.5268 654.051 93.6934 652.495 94.4668C650.846 95.2971 649.063 95.83 647.229 96.041C645.384 96.3513 643.518 96.5093 641.648 96.5133H631.115V75.104H642.984C644.685 74.9931 646.392 74.9931 648.093 75.104C649.772 75.2908 651.4 75.7985 652.888 76.5995C654.334 77.267 655.56 78.3315 656.425 79.6692C657.428 81.2394 657.922 83.081 657.84 84.9428C657.902 86.9618 657.384 88.9561 656.347 90.6887V91.0822ZM684.644 148.698L661.063 109.343C666.553 107.856 671.444 104.692 675.055 100.291C678.526 95.7942 680.331 90.2306 680.164 84.5493C680.311 79.9585 679.283 75.4064 677.177 71.3259C675.255 67.8958 672.564 64.959 669.317 62.7465C665.882 60.5459 662.071 58.9983 658.076 58.1813C653.623 57.3262 649.087 56.9829 644.556 57.1581H609.577V149.092H631.193V112.649H639.054L658.941 149.092L684.644 148.698ZM565.952 125.794C564.988 127.192 563.691 128.328 562.179 129.099C560.602 129.919 558.903 130.477 557.148 130.752C555.383 131.059 553.595 131.217 551.803 131.225H538.912V110.13H551.253C555.17 109.979 559.07 110.733 562.65 112.334C564.087 113.048 565.271 114.184 566.043 115.591C566.816 116.998 567.141 118.608 566.973 120.205C567.064 122.142 566.571 124.062 565.559 125.715L565.952 125.794ZM560.528 91.161C557.674 93.0585 554.279 93.9706 550.86 93.7584H538.912V74.8679H550.231C553.867 74.6455 557.498 75.378 560.764 76.9931C561.939 77.6687 562.902 78.6615 563.541 79.8584C564.18 81.0552 564.471 82.4079 564.38 83.7622C564.469 85.1982 564.2 86.6338 563.596 87.9394C562.992 89.2449 562.073 90.3792 560.921 91.2397L560.528 91.161ZM588.04 114.223C587.08 111.883 585.724 109.726 584.031 107.848C582.303 106.029 580.284 104.513 578.057 103.361C575.755 102.187 573.291 101.364 570.747 100.921C574.987 99.612 578.756 97.096 581.594 93.6797C584.45 90.0898 585.928 85.5942 585.76 81.0073C585.922 76.9857 584.941 73.0006 582.93 69.5156C581.065 66.558 578.535 64.0781 575.541 62.2743C572.374 60.5039 568.954 59.2298 565.401 58.4962C561.802 57.787 558.144 57.418 554.475 57.3942H517.531V149.092H554.082C558.416 149.127 562.739 148.678 566.973 147.754C570.968 146.977 574.781 145.455 578.214 143.267C581.489 141.221 584.193 138.377 586.074 135.003C588.163 131.142 589.193 126.797 589.061 122.409C589.05 119.716 588.544 117.048 587.568 114.538L588.04 114.223ZM1386.58 295.021V203.087H1364.42V237.877H1328.42V203.087H1306.25V295.021H1328.42V256.61H1364.18V295.021H1386.58ZM1291.55 282.348L1275.83 267.787C1273.76 270.62 1271.07 272.937 1267.97 274.556C1264.39 276.354 1260.42 277.246 1256.41 277.154C1252.79 277.196 1249.2 276.472 1245.88 275.028C1242.76 273.708 1239.95 271.751 1237.63 269.282C1235.35 266.631 1233.61 263.555 1232.52 260.231C1231.16 256.581 1230.5 252.711 1230.55 248.818C1230.49 244.975 1231.16 241.156 1232.52 237.562C1233.73 234.27 1235.57 231.248 1237.94 228.668C1240.3 226.131 1243.17 224.12 1246.35 222.765C1249.73 221.315 1253.37 220.591 1257.04 220.639C1260.6 220.619 1264.13 221.314 1267.42 222.686C1270.56 224.075 1273.27 226.276 1275.28 229.061L1290.29 213.949C1286.14 209.368 1280.9 205.926 1275.04 203.953C1268.94 201.651 1262.47 200.478 1255.94 200.49C1249.27 200.42 1242.63 201.566 1236.37 203.874C1230.53 206.008 1225.18 209.301 1220.65 213.556C1216.24 217.85 1212.79 223.026 1210.51 228.747C1207.85 235.07 1206.54 241.879 1206.66 248.739C1206.57 255.486 1207.85 262.181 1210.43 268.417C1212.76 274.326 1216.3 279.686 1220.81 284.159C1225.33 288.488 1230.67 291.86 1236.53 294.076C1242.8 296.486 1249.46 297.688 1256.18 297.618C1263.25 297.731 1270.27 296.336 1276.77 293.525C1282.53 290.932 1287.67 287.15 1291.86 282.427L1291.55 282.348ZM1192.67 212.139C1188.57 208.398 1183.76 205.532 1178.52 203.717C1173.47 201.885 1168.16 200.901 1162.8 200.804C1158.47 200.806 1154.17 201.362 1149.98 202.457C1145.92 203.497 1142.06 205.227 1138.59 207.574C1135.33 209.942 1132.65 213.007 1130.73 216.547C1128.55 220.58 1127.47 225.111 1127.58 229.691C1127.49 233.314 1128.19 236.913 1129.62 240.238C1130.91 243.029 1132.72 245.543 1134.97 247.637C1137.2 249.678 1139.71 251.376 1142.44 252.675C1145.26 253.952 1148.14 255.082 1151.08 256.059C1154.15 257.004 1156.82 257.869 1158.94 258.735C1161.03 259.411 1163.03 260.309 1164.92 261.411C1166.34 262.285 1167.59 263.404 1168.61 264.717C1169.49 266.02 1169.95 267.555 1169.95 269.125C1169.97 270.766 1169.6 272.388 1168.85 273.848C1168.22 275.098 1167.27 276.157 1166.1 276.917C1164.85 277.728 1163.46 278.314 1162.01 278.649C1156.66 279.732 1151.11 278.925 1146.29 276.366C1142.9 274.675 1139.88 272.32 1137.41 269.44L1122.24 283.844C1126.49 288.241 1131.71 291.583 1137.49 293.604C1143.59 295.896 1150.06 297.069 1156.59 297.067C1161.02 297.062 1165.44 296.453 1169.71 295.257C1173.78 294.12 1177.59 292.224 1180.95 289.668C1184.26 287.135 1186.95 283.877 1188.81 280.145C1190.86 275.876 1191.85 271.181 1191.72 266.449C1191.86 262.44 1190.91 258.468 1188.97 254.957C1187.22 251.916 1184.9 249.243 1182.13 247.086C1179.32 245.005 1176.22 243.336 1172.94 242.127C1169.56 240.868 1166.33 239.687 1163.19 238.664L1157.37 236.696C1155.82 236.089 1154.32 235.351 1152.89 234.492C1151.74 233.852 1150.77 232.932 1150.06 231.816C1149.33 230.638 1148.97 229.266 1149.04 227.881C1148.97 226.289 1149.41 224.715 1150.3 223.394C1151.08 222.218 1152.13 221.246 1153.36 220.561C1154.61 219.795 1156 219.286 1157.45 219.065C1158.93 218.817 1160.43 218.686 1161.93 218.672C1165.15 218.703 1168.32 219.456 1171.21 220.876C1174.11 222.184 1176.64 224.184 1178.6 226.7L1192.67 212.139ZM1105.41 203.166H1083.09V295.021H1105.41V203.166ZM1067.84 222.135V203.087H993.796V222.056H1019.74V295.021H1041.9V222.056L1067.84 222.135ZM942.074 177.27C941.038 176.255 939.807 175.46 938.457 174.932C937.106 174.405 935.663 174.156 934.214 174.2C932.756 174.207 931.313 174.501 929.969 175.066C928.658 175.591 927.477 176.397 926.511 177.427C925.55 178.406 924.777 179.553 924.231 180.812C923.693 182.053 923.425 183.395 923.445 184.748C923.423 186.162 923.688 187.567 924.223 188.876C924.759 190.186 925.554 191.373 926.56 192.366C927.567 193.359 928.764 194.138 930.079 194.655C931.395 195.172 932.801 195.416 934.214 195.373C935.663 195.418 937.106 195.169 938.457 194.642C939.807 194.114 941.038 193.319 942.074 192.304C943.07 191.322 943.861 190.152 944.401 188.862C944.941 187.571 945.219 186.186 945.219 184.787C945.219 183.388 944.941 182.003 944.401 180.712C943.861 179.422 943.07 178.252 942.074 177.27ZM970.293 177.27C969.265 176.244 968.036 175.441 966.683 174.913C965.331 174.384 963.884 174.142 962.433 174.2C960.949 174.198 959.479 174.493 958.11 175.066C956.832 175.611 955.681 176.415 954.73 177.427C953.769 178.406 952.996 179.553 952.45 180.812C951.887 182.048 951.592 183.389 951.585 184.748C951.593 186.886 952.227 188.976 953.409 190.758C954.59 192.54 956.268 193.936 958.233 194.774C960.199 195.611 962.366 195.853 964.468 195.47C966.569 195.087 968.513 194.096 970.057 192.619C971.073 191.648 971.881 190.482 972.433 189.19C972.986 187.898 973.27 186.507 973.27 185.102C973.27 183.696 972.986 182.306 972.433 181.014C971.881 179.722 971.073 178.555 970.057 177.585L970.293 177.27ZM958.974 259.208H935.864L947.577 227.723L958.974 259.208ZM996.94 295.021L958.974 203.087H937.358L898.763 295.021H922.895L929.655 276.996H965.341L972.494 295.021H996.94ZM902.065 222.056V203.087H828.019V222.056H853.959V295.021H876.125V222.056H902.065ZM812.848 203.087H790.525V295.021H812.848V203.087ZM745.956 237.011C744.988 238.456 743.66 239.622 742.104 240.396C740.479 241.217 738.724 241.75 736.916 241.97C735.072 242.28 733.206 242.438 731.336 242.442H720.803V220.876H732.672C734.408 220.895 736.141 221.027 737.86 221.269C739.537 221.467 741.162 221.974 742.655 222.765C744.073 223.474 745.289 224.53 746.192 225.834C747.131 227.428 747.595 229.258 747.528 231.108C747.628 233.131 747.107 235.136 746.035 236.854L745.956 237.011ZM774.411 294.863L750.358 255.508C755.87 254.021 760.786 250.859 764.428 246.456C767.877 241.952 769.655 236.387 769.459 230.714C769.606 226.124 768.578 221.571 766.472 217.491C764.579 214.04 761.882 211.097 758.611 208.912C755.141 206.724 751.308 205.178 747.292 204.346C743.061 203.396 738.737 202.921 734.401 202.93H699.579V295.021H721.274V258.578H729.135L749.1 295.021L774.411 294.863ZM647.465 259.208H624.355L636.067 227.723L647.465 259.208ZM685.352 295.021L647.229 203.087H625.691L587.175 295.021H611.306L617.988 276.996H653.596L660.67 295.021H685.352ZM563.672 236.618C562.802 238.051 561.586 239.242 560.135 240.081C558.539 240.952 556.814 241.563 555.026 241.891C553.05 242.211 551.053 242.369 549.052 242.364H539.698V220.876H549.445C551.364 220.884 553.28 221.015 555.183 221.269C556.941 221.483 558.646 222.016 560.214 222.843C561.646 223.573 562.844 224.691 563.672 226.07C564.622 227.689 565.086 229.547 565.008 231.423C565.065 233.296 564.602 235.149 563.672 236.775V236.618ZM584.424 217.963C582.605 214.418 579.896 211.407 576.563 209.226C573.097 206.926 569.231 205.298 565.166 204.425C560.543 203.423 555.825 202.922 551.095 202.93H517.531V295.021H539.698V260.231H550.702C555.333 260.235 559.948 259.707 564.458 258.657C568.632 257.736 572.602 256.055 576.17 253.698C579.504 251.452 582.21 248.391 584.031 244.804C586.134 240.609 587.16 235.956 587.018 231.265C587.158 226.676 586.215 222.119 584.267 217.963" fill={fillColor}/>
    <path d="M358.829 164.676L277.552 171.76C277.552 174.594 278.024 177.506 278.024 180.418C278.042 200.469 271.938 220.045 260.529 236.523C249.12 253.001 232.953 265.591 214.195 272.606C195.437 279.621 174.985 280.724 155.583 275.769C136.181 270.814 118.755 260.036 105.644 244.882L44.2539 298.326C53.3642 308.786 63.6211 318.185 74.8311 326.347C86.098 334.563 98.2858 341.431 111.146 346.812C124.183 352.262 137.827 356.12 151.785 358.304C166.212 360.58 180.862 361.082 195.41 359.799C211.547 358.511 227.423 354.961 242.573 349.252C271.749 338.395 297.595 320.11 317.562 296.201C327.441 284.395 335.788 271.383 342.401 257.476C356.047 228.618 361.772 196.641 358.986 164.834" fill="#C6C6C6"/>
    <path d="M358.908 164.598C357.31 146.067 352.911 127.888 345.859 110.681C338.48 92.9509 328.258 76.5468 315.597 62.1167L253.971 115.718C267.514 131.394 275.767 150.952 277.552 171.603L358.908 164.598Z" fill="#878787"/>
    <path d="M315.048 62.5886C304.494 50.4831 292.327 39.8891 278.89 31.1044C265.903 22.4422 251.846 15.5099 237.072 10.4823C222.545 5.42587 207.438 2.22593 192.11 0.95837C176.787 -0.147108 161.385 0.725869 146.284 3.55581C131.028 6.44124 116.207 11.2824 102.187 17.9598C87.584 24.9325 73.9926 33.8556 61.7841 44.4852C49.5561 55.0266 38.843 67.2109 29.9493 80.6919C21.3528 93.7433 14.4583 107.842 9.43352 122.645C-0.68591 152.425 -2.81007 184.346 3.27395 215.208C9.35796 246.069 23.4364 274.787 44.0981 298.483L105.645 244.882C97.0559 235.159 90.4743 223.829 86.2806 211.546C82.0868 199.263 80.3639 186.27 81.2112 173.317C82.0586 160.364 85.4594 147.707 91.2175 136.077C96.9755 124.446 104.977 114.073 114.76 105.556C124.542 97.0383 135.913 90.5452 148.215 86.4511C160.517 82.3571 173.506 80.7432 186.435 81.7027C199.363 82.6621 211.973 86.1758 223.538 92.0411C235.103 97.9063 245.393 106.007 253.815 115.875L315.048 62.5886Z" fill={fillColor}/>
  </svg>


);
