SESSION_NAME="dev_session"

VENV_PATH="$HOME/development/library-management/src/backend/venv"

DJANGO_PROJECT_PATH="$HOME/development/library-management/src/backend"

FRONTEND_PROJECT_PATH="$HOME/development/library-management/src/frontend"

DJANGO_RUNSERVER_CMD="python3 manage.py runserver 127.0.0.1:8000"

FRONTEND_RUN_CMD="npm run dev"

tmux new-session -d -s $SESSION_NAME

tmux rename-window -t $SESSION_NAME:0 "development"

tmux send-keys -t $SESSION_NAME:0 "cd $DJANGO_PROJECT_PATH" C-m
tmux send-keys -t $SESSION_NAME:0 "source $VENV_PATH/bin/activate" C-m
tmux send-keys -t $SESSION_NAME:0 "$DJANGO_RUNSERVER_CMD" C-m

tmux split-window -t $SESSION_NAME:0

tmux send-keys -t $SESSION_NAME:0.1 "cd $FRONTEND_PROJECT_PATH" C-m
tmux send-keys -t $SESSION_NAME:0.1 "$FRONTEND_RUN_CMD" C-m

tmux attach -t $SESSION_NAME
