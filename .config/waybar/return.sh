output=$(pgrep swayidle)

if [[ -z "$output" ]]; then
    echo "off"
else
    echo "on"
fi
