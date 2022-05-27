import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path} from 'react-native-svg';

 function Logo(){
    return (

        <View style={styles.container}>
            <Svg width="143" height="25" viewBox="0 0 143 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M25.7 20.85C25.72 21.25 25.77 21.64 25.85 22.02C25.95 22.4 26.07 22.68 26.21 22.86C26.03 23.04 25.75 23.25 25.37 23.49C25.01 23.73 24.59 23.92 24.11 24.06C23.65 24.22 23.16 24.29 22.64 24.27C21.86 24.23 21.23 23.9 20.75 23.28C20.29 22.66 20.05 21.89 20.03 20.97C20.03 20.79 20.03 20.46 20.03 19.98C20.03 19.48 20.03 18.95 20.03 18.39C20.03 17.83 20.03 17.37 20.03 17.01C20.03 16.67 19.94 16.34 19.76 16.02C19.6 15.7 19.41 15.51 19.19 15.45C18.89 15.35 18.64 15.53 18.44 15.99C18.4 16.09 18.27 16.34 18.05 16.74C17.83 17.12 17.58 17.57 17.3 18.09C17.04 18.61 16.79 19.13 16.55 19.65C16.33 20.17 16.18 20.62 16.1 21C16.02 21.36 16.07 21.58 16.25 21.66C16.17 21.86 16.02 22.15 15.8 22.53C15.6 22.91 15.26 23.24 14.78 23.52C14.32 23.78 13.66 23.88 12.8 23.82C12.34 23.78 11.75 23.5 11.03 22.98C10.31 22.46 9.62 21.51 8.96 20.13C8.34 18.81 7.83 17.92 7.43 17.46C7.05 16.98 6.77 16.76 6.59 16.8C6.43 16.82 6.3 16.93 6.2 17.13C6.12 17.33 6.04 17.61 5.96 17.97C5.92 18.15 5.9 18.45 5.9 18.87C5.9 19.29 5.92 19.76 5.96 20.28C6 20.8 6.07 21.29 6.17 21.75C6.29 22.21 6.44 22.56 6.62 22.8C6.46 22.9 6.17 23.07 5.75 23.31C5.35 23.55 4.89 23.77 4.37 23.97C3.87 24.15 3.38 24.24 2.9 24.24C2.18 24.22 1.58 24.03 1.1 23.67C0.62 23.29 0.33 22.55 0.23 21.45C0.21 21.27 0.2 20.76 0.2 19.92C0.2 19.08 0.2 18.02 0.2 16.74C0.2 15.46 0.2 14.09 0.2 12.63C0.2 11.15 0.2 9.69 0.2 8.25C0.2 6.81 0.2 5.49 0.2 4.29C0.22 3.09 0.23 2.13 0.23 1.41C0.23 0.689999 0.23 0.329999 0.23 0.329999C0.45 0.289999 0.82 0.28 1.34 0.299999C1.86 0.319999 2.43 0.399999 3.05 0.539998C3.67 0.679999 4.24 0.909999 4.76 1.23C5.28 1.53 5.64 1.96 5.84 2.52C5.84 2.52 5.93 2.71 6.11 3.09C6.31 3.45 6.57 3.93 6.89 4.53C7.21 5.11 7.55 5.74 7.91 6.42C8.29 7.1 8.65 7.77 8.99 8.43C9.35 9.09 9.66 9.67 9.92 10.17C10.2 10.67 10.39 11.02 10.49 11.22C10.83 11.8 11.15 12.2 11.45 12.42C11.77 12.64 12.11 12.76 12.47 12.78C13.21 12.78 13.92 12.21 14.6 11.07C14.7 10.89 14.9 10.51 15.2 9.93C15.5 9.33 15.85 8.62 16.25 7.8C16.65 6.98 17.06 6.14 17.48 5.28C17.92 4.42 18.32 3.62 18.68 2.88C19.04 2.12 19.33 1.51 19.55 1.05C19.79 0.569999 19.91 0.329999 19.91 0.329999C20.05 0.309999 20.25 0.299999 20.51 0.299999C20.79 0.28 21.09 0.289999 21.41 0.329999C21.97 0.369998 22.56 0.479998 23.18 0.659998C23.82 0.839998 24.37 1.12 24.83 1.5C25.31 1.88 25.58 2.39 25.64 3.03C25.68 3.37 25.71 3.93 25.73 4.71C25.75 5.47 25.76 6.38 25.76 7.44C25.76 8.48 25.76 9.59 25.76 10.77C25.76 11.95 25.75 13.11 25.73 14.25C25.73 15.39 25.72 16.44 25.7 17.4C25.7 18.36 25.7 19.15 25.7 19.77C25.7 20.37 25.7 20.73 25.7 20.85ZM44.038 20.19C44.038 20.37 44.068 20.64 44.128 21C44.188 21.36 44.268 21.73 44.368 22.11C44.488 22.49 44.608 22.83 44.728 23.13C44.848 23.41 44.968 23.58 45.088 23.64C44.808 23.98 44.358 24.25 43.738 24.45C43.118 24.67 42.498 24.71 41.878 24.57C41.398 24.43 40.968 24.3 40.588 24.18C40.208 24.06 39.688 24.01 39.028 24.03C38.548 24.05 38.068 24.1 37.588 24.18C37.128 24.26 36.658 24.35 36.178 24.45C35.938 24.49 35.518 24.5 34.918 24.48C34.338 24.48 33.698 24.41 32.998 24.27C32.318 24.13 31.688 23.89 31.108 23.55C30.348 23.09 29.778 22.42 29.398 21.54C29.018 20.66 28.798 19.76 28.738 18.84C28.738 18.62 28.728 18.19 28.708 17.55C28.708 16.91 28.698 16.15 28.678 15.27C28.678 14.39 28.668 13.48 28.648 12.54C28.648 11.6 28.638 10.73 28.618 9.93C28.618 9.11 28.618 8.45 28.618 7.95C28.618 7.43 28.618 7.17 28.618 7.17C28.798 7.15 29.098 7.13 29.518 7.11C29.958 7.07 30.438 7.07 30.958 7.11C31.478 7.15 31.978 7.25 32.458 7.41C32.958 7.55 33.378 7.78 33.718 8.1C34.078 8.42 34.288 8.85 34.348 9.39C34.388 9.83 34.418 10.23 34.438 10.59C34.458 10.95 34.468 11.35 34.468 11.79C34.468 12.21 34.448 12.74 34.408 13.38C34.388 14 34.358 14.79 34.318 15.75C34.278 16.53 34.258 17.2 34.258 17.76C34.278 18.32 34.418 18.74 34.678 19.02C34.938 19.3 35.398 19.42 36.058 19.38C36.498 19.36 36.858 19.19 37.138 18.87C37.438 18.53 37.678 18.12 37.858 17.64C38.038 17.16 38.158 16.67 38.218 16.17C38.298 15.67 38.338 15.23 38.338 14.85C38.338 14.77 38.328 14.46 38.308 13.92C38.308 13.38 38.298 12.74 38.278 12C38.278 11.24 38.268 10.49 38.248 9.75C38.248 9.01 38.248 8.4 38.248 7.92C38.248 7.42 38.248 7.17 38.248 7.17C38.428 7.15 38.728 7.15 39.148 7.17C39.568 7.17 40.038 7.21 40.558 7.29C41.078 7.37 41.588 7.51 42.088 7.71C42.588 7.91 43.008 8.19 43.348 8.55C43.708 8.89 43.918 9.33 43.978 9.87C44.098 11.03 44.118 12.45 44.038 14.13C43.978 15.79 43.978 17.81 44.038 20.19ZM64.0752 20.28C64.4152 20.68 64.9152 20.96 65.5752 21.12C65.4752 21.54 65.3452 21.99 65.1852 22.47C65.0452 22.95 64.8152 23.37 64.4952 23.73C64.1952 24.09 63.7552 24.32 63.1752 24.42C62.9152 24.48 62.5852 24.46 62.1852 24.36C61.7852 24.26 61.3052 24.14 60.7452 24C60.3852 23.9 59.9252 23.88 59.3652 23.94C58.8052 23.98 58.2752 24.04 57.7752 24.12C57.2952 24.2 56.9752 24.26 56.8152 24.3C56.5952 24.36 56.3752 24.39 56.1552 24.39C55.9352 24.41 55.7152 24.42 55.4952 24.42C54.4552 24.42 53.4252 24.24 52.4052 23.88C51.4052 23.5 50.5052 22.92 49.7052 22.14C48.9052 21.36 48.2952 20.37 47.8752 19.17C47.4752 17.97 47.3652 16.53 47.5452 14.85C47.6652 13.69 47.9752 12.61 48.4752 11.61C48.9952 10.61 49.6352 9.74 50.3952 9C51.1552 8.24 51.9652 7.66 52.8252 7.26C53.7052 6.84 54.5652 6.63 55.4052 6.63C55.5852 6.63 55.7552 6.63 55.9152 6.63C56.0952 6.63 56.2652 6.62 56.4252 6.6C56.7852 6.54 57.1352 6.34 57.4752 6C57.8152 5.66 58.0452 5.24 58.1652 4.74C58.2252 4.46 58.2652 4.13 58.2852 3.75C58.3052 3.37 58.3152 3.14 58.3152 3.06C58.3752 2.6 58.5452 2.21 58.8252 1.89C59.1052 1.55 59.4352 1.28 59.8152 1.08C60.3352 0.799998 60.9052 0.599998 61.5252 0.479999C62.1452 0.359999 62.7152 0.299999 63.2352 0.299999C63.7752 0.28 64.1752 0.299999 64.4352 0.359999C64.4152 0.479998 64.3752 0.909998 64.3152 1.65C64.2552 2.39 64.1852 3.32 64.1052 4.44C64.0252 5.56 63.9452 6.79 63.8652 8.13C63.7852 9.45 63.7152 10.78 63.6552 12.12C63.6152 13.46 63.5952 14.71 63.5952 15.87C63.5952 17.03 63.6352 18 63.7152 18.78C63.7952 19.56 63.9152 20.06 64.0752 20.28ZM52.9152 15.84C52.8552 16.62 52.9452 17.27 53.1852 17.79C53.4452 18.29 53.7652 18.67 54.1452 18.93C54.5452 19.17 54.9352 19.3 55.3152 19.32C56.0352 19.34 56.5852 19.16 56.9652 18.78C57.3652 18.38 57.6352 17.86 57.7752 17.22C57.9152 16.56 57.9852 15.86 57.9852 15.12C57.9852 14 57.7652 13.19 57.3252 12.69C56.8852 12.19 56.1952 11.97 55.2552 12.03C54.6552 12.07 54.1352 12.36 53.6952 12.9C53.2752 13.44 53.0152 14.42 52.9152 15.84ZM86.4737 6.54C87.8337 6.72 88.8337 7.14 89.4737 7.8C90.1337 8.44 90.5137 9.19 90.6137 10.05C90.7137 10.91 90.6137 11.78 90.3137 12.66C90.1537 13.16 89.9237 13.81 89.6237 14.61C89.3437 15.39 89.0437 16.19 88.7237 17.01C88.4237 17.83 88.1437 18.57 87.8837 19.23C87.6437 19.87 87.4637 20.32 87.3437 20.58C86.8637 21.7 86.3637 22.55 85.8437 23.13C85.3237 23.71 84.6437 24.02 83.8037 24.06C83.3437 24.08 82.9037 23.94 82.4837 23.64C82.0837 23.32 81.7637 22.98 81.5237 22.62C81.4637 22.54 81.4137 22.34 81.3737 22.02C81.3537 21.68 81.3337 21.34 81.3137 21C81.2937 20.64 81.2537 20.4 81.1937 20.28C81.1537 20.14 81.0637 19.88 80.9237 19.5C80.8037 19.1 80.6337 18.73 80.4137 18.39C80.2137 18.03 79.9637 17.86 79.6637 17.88C79.4237 17.9 79.1937 18.09 78.9737 18.45C78.7537 18.81 78.4437 19.4 78.0437 20.22C77.6437 21.08 77.3037 21.79 77.0237 22.35C76.7437 22.89 76.4637 23.29 76.1837 23.55C75.9237 23.81 75.5937 23.94 75.1937 23.94C74.5137 23.94 73.9737 23.82 73.5737 23.58C73.1737 23.32 72.8437 23.02 72.5837 22.68C72.5237 22.6 72.4737 22.39 72.4337 22.05C72.3937 21.71 72.3537 21.36 72.3137 21C72.2937 20.64 72.2537 20.4 72.1937 20.28C71.9737 19.66 71.7137 18.92 71.4137 18.06C71.1137 17.18 70.8037 16.24 70.4837 15.24C70.1837 14.24 69.8837 13.26 69.5837 12.3C69.2837 11.34 69.0037 10.47 68.7437 9.69C68.5037 8.89 68.3137 8.26 68.1737 7.8C68.0337 7.32 67.9637 7.08 67.9637 7.08C68.2637 7.04 68.6737 6.99 69.1937 6.93C69.7137 6.87 70.2637 6.86 70.8437 6.9C71.4437 6.94 72.0037 7.09 72.5237 7.35C73.0437 7.61 73.4637 8.03 73.7837 8.61C73.8637 8.75 73.9537 9 74.0537 9.36C74.1737 9.7 74.2937 10.05 74.4137 10.41C74.5337 10.75 74.6237 11.01 74.6837 11.19C74.7837 11.45 74.9337 11.7 75.1337 11.94C75.3337 12.16 75.5237 12.28 75.7037 12.3C76.0637 12.3 76.3337 12.14 76.5137 11.82C76.6937 11.48 76.8137 11.1 76.8737 10.68C76.9537 10.24 77.0037 9.87 77.0237 9.57C77.0437 9.43 77.0437 9.18 77.0237 8.82C77.0037 8.44 76.9837 8.09 76.9637 7.77C76.9637 7.43 76.9637 7.26 76.9637 7.26C77.2637 7.22 77.6437 7.17 78.1037 7.11C78.5837 7.03 79.0837 7 79.6037 7.02C80.1437 7.04 80.6537 7.18 81.1337 7.44C81.6137 7.68 82.0137 8.09 82.3337 8.67C82.4337 8.85 82.5537 9.17 82.6937 9.63C82.8537 10.09 83.0037 10.55 83.1437 11.01C83.3037 11.47 83.4137 11.81 83.4737 12.03C83.5737 12.35 83.7037 12.58 83.8637 12.72C84.0437 12.84 84.2037 12.9 84.3437 12.9C84.6437 12.9 84.8937 12.72 85.0937 12.36C85.3137 12 85.4837 11.6 85.6037 11.16C85.7437 10.72 85.8437 10.4 85.9037 10.2C86.0837 9.5 86.2437 8.82 86.3837 8.16C86.5237 7.48 86.5537 6.94 86.4737 6.54ZM109.016 18.57C109.036 19.01 109.066 19.55 109.106 20.19C109.166 20.83 109.296 21.45 109.496 22.05C109.696 22.65 110.016 23.13 110.456 23.49C109.956 23.83 109.446 24.07 108.926 24.21C108.406 24.37 107.896 24.41 107.396 24.33C107.256 24.29 107.106 24.24 106.946 24.18C106.786 24.14 106.566 24.08 106.286 24C105.826 23.86 105.286 23.83 104.666 23.91C104.046 23.99 103.396 24.09 102.716 24.21C102.056 24.35 101.406 24.42 100.766 24.42C99.7259 24.42 98.6859 24.24 97.6459 23.88C96.6059 23.5 95.6659 22.92 94.8259 22.14C93.9859 21.36 93.3459 20.37 92.9059 19.17C92.4659 17.97 92.3359 16.53 92.5159 14.85C92.6359 13.69 92.9659 12.63 93.5059 11.67C94.0459 10.69 94.7059 9.85 95.4859 9.15C96.2859 8.43 97.1259 7.88 98.0059 7.5C98.9059 7.1 99.7759 6.91 100.616 6.93C101.256 6.95 101.746 6.97 102.086 6.99C102.446 7.01 102.906 7.06 103.466 7.14C103.806 7.18 104.236 7.13 104.756 6.99C105.276 6.85 105.796 6.7 106.316 6.54C106.856 6.36 107.316 6.27 107.696 6.27C108.276 6.25 108.686 6.27 108.926 6.33C109.166 6.37 109.366 6.41 109.526 6.45C109.406 6.81 109.306 7.35 109.226 8.07C109.146 8.79 109.086 9.61 109.046 10.53C109.026 11.43 109.006 12.37 108.986 13.35C108.966 14.33 108.956 15.27 108.956 16.17C108.976 17.07 108.996 17.87 109.016 18.57ZM97.7359 15.81C97.7759 16.81 97.9559 17.59 98.2759 18.15C98.6159 18.69 99.0159 19.07 99.4759 19.29C99.9559 19.51 100.416 19.62 100.856 19.62C101.736 19.64 102.386 19.3 102.806 18.6C103.226 17.9 103.426 16.93 103.406 15.69C103.406 15.35 103.366 14.95 103.286 14.49C103.226 14.03 103.106 13.58 102.926 13.14C102.766 12.7 102.536 12.33 102.236 12.03C101.956 11.73 101.586 11.58 101.126 11.58C100.206 11.58 99.3959 11.92 98.6959 12.6C98.0159 13.28 97.6959 14.35 97.7359 15.81ZM122.476 6.63C122.876 6.53 123.246 6.63 123.586 6.93C123.926 7.23 124.226 7.64 124.486 8.16C124.766 8.66 124.996 9.18 125.176 9.72C125.356 10.24 125.496 10.68 125.596 11.04C125.696 11.4 125.746 11.58 125.746 11.58C125.746 11.58 125.506 11.63 125.026 11.73C124.566 11.81 123.986 11.98 123.286 12.24C122.606 12.48 121.926 12.85 121.246 13.35C120.846 13.65 120.466 14.01 120.106 14.43C119.746 14.85 119.436 15.39 119.176 16.05C118.916 16.69 118.726 17.54 118.606 18.6C118.546 19.14 118.536 19.7 118.576 20.28C118.616 20.86 118.636 21.35 118.636 21.75C118.656 22.11 118.706 22.37 118.786 22.53C118.886 22.67 118.966 22.79 119.026 22.89C118.766 23.13 118.286 23.4 117.586 23.7C116.906 23.98 116.156 24.12 115.336 24.12C114.536 24.12 113.946 23.86 113.566 23.34C113.186 22.82 112.996 22.1 112.996 21.18C112.996 20.96 112.986 20.48 112.966 19.74C112.966 18.98 112.956 18.07 112.936 17.01C112.936 15.95 112.926 14.85 112.906 13.71C112.906 12.57 112.896 11.51 112.876 10.53C112.876 9.53 112.866 8.72 112.846 8.1C112.846 7.48 112.846 7.17 112.846 7.17C113.046 7.13 113.386 7.1 113.866 7.08C114.366 7.06 114.906 7.08 115.486 7.14C116.066 7.2 116.606 7.34 117.106 7.56C117.346 7.66 117.666 7.76 118.066 7.86C118.486 7.94 118.886 7.98 119.266 7.98C119.666 7.98 119.956 7.92 120.136 7.8C120.516 7.52 120.896 7.28 121.276 7.08C121.676 6.88 122.076 6.73 122.476 6.63ZM141.765 16.47C142.265 16.81 142.585 17.3 142.725 17.94C142.885 18.56 142.865 19.24 142.665 19.98C142.485 20.72 142.115 21.43 141.555 22.11C140.995 22.77 140.235 23.32 139.275 23.76C138.335 24.2 137.195 24.43 135.855 24.45C134.735 24.47 133.635 24.33 132.555 24.03C131.495 23.73 130.525 23.27 129.645 22.65C128.785 22.03 128.085 21.23 127.545 20.25C127.005 19.27 126.705 18.1 126.645 16.74C126.625 16.46 126.625 16.17 126.645 15.87C126.665 15.57 126.685 15.26 126.705 14.94C126.705 14.86 126.705 14.78 126.705 14.7C126.725 14.62 126.745 14.54 126.765 14.46C126.965 13.26 127.375 12.16 127.995 11.16C128.635 10.16 129.415 9.31 130.335 8.61C131.255 7.91 132.235 7.4 133.275 7.08C134.335 6.74 135.375 6.62 136.395 6.72C137.975 6.88 139.195 7.3 140.055 7.98C140.935 8.66 141.505 9.5 141.765 10.5C142.045 11.48 142.055 12.54 141.795 13.68C141.655 14.24 141.335 14.8 140.835 15.36C140.355 15.9 139.755 16.39 139.035 16.83C138.315 17.25 137.545 17.58 136.725 17.82C135.925 18.04 135.145 18.13 134.385 18.09C134.005 18.07 133.805 18.19 133.785 18.45C133.765 18.69 133.875 18.96 134.115 19.26C134.355 19.54 134.675 19.73 135.075 19.83C136.015 20.03 136.895 20.04 137.715 19.86C138.555 19.66 139.195 19.39 139.635 19.05C139.995 18.77 140.375 18.4 140.775 17.94C141.175 17.46 141.505 16.97 141.765 16.47ZM135.195 13.44C135.655 13.4 136.055 13.26 136.395 13.02C136.755 12.76 136.935 12.49 136.935 12.21C136.955 11.81 136.855 11.49 136.635 11.25C136.435 10.99 136.085 10.87 135.585 10.89C135.025 10.91 134.485 10.99 133.965 11.13C133.445 11.27 133.135 11.56 133.035 12C132.975 12.3 133.065 12.56 133.305 12.78C133.545 13 133.845 13.17 134.205 13.29C134.565 13.39 134.895 13.44 135.195 13.44Z" fill="#4473B7"/>
            </Svg>
        </View>
        
    )
}
export default Logo
const styles = StyleSheet.create({
    container: {
    //   paddingTop:50,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   marginBottom:40,
    },
  });