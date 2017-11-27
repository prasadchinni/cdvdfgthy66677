pipeline {
  agent any

  environment {
   KUBE_URL = credentials('KUBE_URL')
   KUBE_TOKEN = credentials('KUBE_TOKEN')
  }

  stages {
   stage('aa') {
      steps {
        sh 'echo hello'
      }
    }
  stage('Export Version') {
      steps {
        sh 'export VERSION=$(cat package.json | jq -r ".version") && echo $VERSION > VERSION'
      }
    }
  }
}
