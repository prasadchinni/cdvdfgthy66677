pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps {
        sh "echo $KUBE_URL"
      }
    }
    stage('Publish Image') {
      steps {
        sh 'docker '
      }
    }
    stage('Deploy') {
      steps {
        sh 'curl'
      }
    }
  }
}
