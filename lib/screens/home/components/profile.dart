import 'package:flutter/material.dart';

class MyProfile extends StatelessWidget {
  const MyProfile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const CircleAvatar(
          radius: 74,
          backgroundColor: Colors.white,
          child: CircleAvatar(
            backgroundImage: AssetImage('assets/profile.png'),
            radius: 72,
          ),
        ),
        const SizedBox(height: 4),
        const Text(
          'Daffa Ilhami',
          style: TextStyle(fontSize: 32),
        ),
        const SizedBox(height: 2),
        RichText(
          text: TextSpan(
            style:
                Theme.of(context).textTheme.bodySmall?.copyWith(fontSize: 14),
            children: [
              const TextSpan(text: '<'),
              TextSpan(
                  text: 'code',
                  style: TextStyle(
                      color: Theme.of(context).colorScheme.secondaryContainer)),
              const TextSpan(text: '> Programmer'),
              TextSpan(
                  text: ' | ',
                  style: TextStyle(
                      color: Theme.of(context).colorScheme.secondaryContainer)),
              const TextSpan(text: 'Speedcuber </'),
              TextSpan(
                  text: 'code',
                  style: TextStyle(
                      color: Theme.of(context).colorScheme.secondaryContainer)),
              const TextSpan(text: '>'),
            ],
          ),
        ),
      ],
    );
  }
}
