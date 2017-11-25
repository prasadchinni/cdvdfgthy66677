pipeline {
  agent any
  stages {
    stage('Test Docker') {
      agent any
      steps {
        dockerNode(socket: true, image: 'circleci/node:8.0')
      }
    }
  }
}