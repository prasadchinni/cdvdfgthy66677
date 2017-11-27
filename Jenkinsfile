pipeline {
  agent any
  environment {
    KUBE_URL = credentials('KUBE_URL')
    KUBE_TOKEN = credentials('KUBE_TOKEN')
    DOCKER_URL = credentials('DOCKER_URL')
    DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
  }
  stages {
    stage('Build Image') {
      steps {
        docker build -t $DOCKER_URL/$JOB_NAME:$(cat VERSION) .
      }
    }
    stage('Push Image') {
      steps {
        sh "docker push $DOCKER_SERVER/$DOCKER_IMAGE:$(cat VERSION)"
      }
    }
  }
}
