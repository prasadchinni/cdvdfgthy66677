pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps {
        sh 'docker build -t $DOCKER_SERVER/$DOCKER_IMAGE:$(cat VERSION) .'
      }
    }
    stage('Push Image') {
      steps {
        sh 'docker login $DOCKER_SERVER -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD'
      }
    }
  }
  environment {
    KUBE_URL = credentials('KUBE_URL')
    KUBE_TOKEN = credentials('KUBE_TOKEN')
    DOCKER_URL = credentials('DOCKER_URL')
    DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
  }
}
