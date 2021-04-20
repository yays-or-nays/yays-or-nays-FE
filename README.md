# Hot Takes
![Landing Page](https://user-images.githubusercontent.com/69775071/115470928-5bd96c80-a1f4-11eb-997d-b6f5bfa42146.png)


<!-- TABLE OF CONTENTS -->

## Table of Contents
* [Repo Links](#repo-link)
* [About the Project](#about-the-project)
* [Lanugages Used](#languages-used)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)


<!-- REPO LINK -->
## Repo Links

[Front End](https://github.com/yays-or-nays/yays-or-nays-FE)

[Back End](https://github.com/yays-or-nays/yays-or-nays-BE)


<!-- ABOUT THE PROJECT -->
## About The Project

Hot Takes is a social experimental application that tracks what the "herd mentality" is on debatable topics! If you've ever wondered "is soup a drink?" or "are socks just weak shoes?", this app is for you. Users are able to pick a category, and vote yes or no in order to update the database with their opinions.


### Languages Used

* React Native (iOS build)
* Detox (testing)
* GraphQL
* Ruby on Rails


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

# yays-or-nays-FE
#### When pulling down the latest changes:
- Pull down into main
- cd into iOS
- run `pod install`


### Prerequisites
* npm
```sh
npm install npm@latest -g
```
* Some browser
* Xcode (latest version)
* A simulator in Xcode (iOS 14.4 or above)
* An IDE (can be Xcode)


### Installation

1. Clone the repository
```sh
git clone https://github.com/yays-or-nays/yays-or-nays-FE 
```

2. Open repo in your shell / terminal
```sh
cd yays-or-nays-FE
```

3. Install NPM packages in both repos
```sh
npm install
```

4. Install Cocoapods
```sh
cd ios
pod install
```

5. Start the Metro bundler
```sh
cd ..
npx react-native start
```

6. Start the simulator
```sh
npx react-native run-ios
```

7. Open the repo in youre IDE


8. Install detox and build the test environment
```sh
xcode-select --install
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
detox build -c ios
```

9. Run the Tests
```sh
detox test -c ios
```


<!-- USAGE EXAMPLES -->
## Usage

### Learn how to use the app
  
  * Users can click How To and learn how to interact with the app

  
  ![How To](https://user-images.githubusercontent.com/69775071/115470977-74498700-a1f4-11eb-8b26-15bd3be87311.png)



### Select a category to vote on
  * Users can click categories and see a list of categories to choose from

  
  ![Categories](https://user-images.githubusercontent.com/69775071/115471025-89beb100-a1f4-11eb-8d1d-61ffacc464d9.png)


### Vote on Hot Takes and see the results
  * A user can swipe right to vote yes, and swipe left to vote no
  
  ![Hot Takes](https://user-images.githubusercontent.com/69775071/115471062-9c38ea80-a1f4-11eb-9867-71a99f4e6fec.png)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/yays-or-nays/yays-or-nays-FE/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature-amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature-amazing-feature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Brian Forbes

[Email](brianandrewf81@gmail.com)

[GitHub](https://github.com/Codeherder19)

Luke Mason

[Email](lukjmason@gmail.com)

[GitHub](https://github.com/LukeMason33)

Matthew Dean

[Email](deanma95@gmail.com)

[GitHub](https://github.com/mattdeann)
