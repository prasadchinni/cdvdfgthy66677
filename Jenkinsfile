pipeline {
  agent any
  environment {
    KUBE_URL = credentials('KUBE_URL')
}
  stages {
    stage('Build Image') {
      steps {
        echo "$KUBE_URL"
      }
    }
  }
}
