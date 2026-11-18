output=$(pgrep swayidle)

if [[ -z "$output" ]]; then
    echo "deactivated"
else
    echo "activated"
fi
